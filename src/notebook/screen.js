import * as elements from "./elements.js";
import localizations from "../localizations.json";
import chunks from "./chunks.js";
import Notebook from "./notebook.js";
import NotebookMessenger from "./messenger";
import EnumsMsg from "../utils/EnumsMsg";

export default class NotebookScreen extends NotebookMessenger {
	
	/**
	 * @constructor
	 * @param {boolean} isEditor
	 * @param {string} senderName
	 * */
	constructor(isEditor, senderName) {
		super(senderName)
		
		this.element = elements.createScreen();
		
		this.isEditor = isEditor;
		
		this.notebook = new Notebook({handlers: chunks});
		
		/**
		 * @type {HTMLElement|undefined}
		 * @private
		 * */
		this.elemOptions = undefined;
		
		
		/**
		 * @type {HTMLElement|undefined}
		 * @private
		 * */
		this.plusBlock = undefined;
		
		
		if (this.isEditor) {
			this.plusBlock = elements.createPlusBlock();
			this.plusBlock.addEventListener('plus', this.onPlusClick.bind(this));
			this.element.appendChild(this.plusBlock);
		}
		
		
		this.on(EnumsMsg.INIT_NOTEBOOK, this.init.bind(this));
		this.on(EnumsMsg.GET_NOTEBOOK, this.getNotebook.bind(this));
		
	}
	
	/**
	 * @param {IMessage} message
	 * */
	async init(message) {
		let data = message.data;
		
		// инициализация чанков, перевод из JSON вида в список обработчиков
		await this.notebook.init(data);
		
		// отрисовать на экране инициализованные чанки
		for (let i = 0; i < this.notebook.chunks.length; i++) {
			const chunk = this.notebook.chunks[i];
			await this.renderChunk(chunk);
		}
		
		this.updateBlocksPositions();
		
		this.response(message);
	}
	
	/**
	 * @param {IMessage} message
	 * */
	async getNotebook(message) {
		let notebook = await this.notebook.save();
		this.response(message, notebook);
	}
	
	/**
	 * @param {LTNChunk} chunk
	 * */
	async renderChunk(chunk) {
		
		let content;
		
		try {
			content = this.isEditor ? await chunk.renderEditor() : await chunk.renderReport();
		} catch (e) {
			console.error(e); // todo вывести ошибку рендера на экран
		}
		
		if (this.isEditor && !(content instanceof HTMLElement)) {
			throw new Error(`${chunk.constructor.name} must return an HTMLElement on editor rendering mode`);
		}
		
		
		if (content instanceof HTMLElement) {
			
			chunk.block = elements.createContentBlock(content, this.isEditor, chunk);
			chunk.block.addEventListener('options', this.onBlockOptionsClick.bind(this, chunk));
			chunk.block.addEventListener('title', (e) => chunk.userTitle = e.title);
			
			this.element.appendChild(chunk.block);
			
		}
		
	}
	
	/**
	 * @void
	 * */
	updateBlocksPositions() {
		
		for (let i = 0; i < this.notebook.chunks.length; i++) {
			let chunk = this.notebook.chunks[i];
			if (chunk.block instanceof HTMLElement) {
				chunk.block.remove();
				this.element.appendChild(chunk.block);
			}
		}
		
		
		if (this.plusBlock instanceof HTMLElement) {
			this.plusBlock.remove();
			this.element.appendChild(this.plusBlock);
		}
	}
	
	
	// ==============================================================================
	// EDITOR ONLY
	
	/**
	 * @param {LTNChunk} chunk
	 * @void
	 * */
	onBlockOptionsClick(chunk) {
		this.createOptions(chunk.block,
			localizations.option_block_settings,
			[
				{name: localizations.option_delete_block, func: this.deleteChunk.bind(this, chunk)},
				{name: localizations.option_move_block_up, func: this.moveChunk.bind(this, chunk, -1)},
				{name: localizations.option_move_block_down, func: this.moveChunk.bind(this, chunk, +1)},
			]
		);
	}
	
	
	/**
	 * @void
	 * */
	onPlusClick() {
		
		let options = [];
		for (let i = 0; i < this.notebook.handlers.length; i++) {
			let handler = this.notebook.handlers[i];
			options.push({name: handler.constructor.title, func: this.createChunk.bind(this, handler.constructor)});
		}
		
		this.createOptions(this.plusBlock, localizations.option_create_block, options);
	}
	
	/**
	 * @void
	 * */
	removeOptions() {
		
		if (this.elemOptions instanceof HTMLElement) this.elemOptions.remove();
		this.elemOptions = null;
		
	}
	
	
	/**
	 * @param {HTMLElement} block
	 * @param {string} title
	 * @param {{name:string, func: function(any)}[]} options
	 * @void
	 * */
	createOptions(block, title, options) {
		
		this.removeOptions();
		
		let opt = elements.createOptionsList(title, options);
		let rect = block.getBoundingClientRect();
		opt.style.top = `${rect.top}px`;
		opt.style.left = `${rect.left}px`;
		
		opt.addEventListener("pointerleave", this.removeOptions.bind(this));
		
		this.elemOptions = opt;
		this.element.appendChild(opt);
		
	}
	
	
	/**
	 * @param {LTNChunk} chunk
	 * */
	deleteChunk(chunk) {
		
		this.removeOptions();
		
		let index = this.notebook.chunks.indexOf(chunk);
		
		if (index < 0) throw new Error('Given chunk is not defined in a notebook!');
		if (!(chunk.block instanceof HTMLElement)) throw new Error('Block is not an instance of an HTMLElement!');
		
		this.notebook.chunks.splice(index, 1);
		chunk.block.remove();
		
		this.updateBlocksPositions();
		
	}
	
	
	/**
	 * @param {LTNChunk} chunk
	 * @param {number} shift
	 * */
	moveChunk(chunk, shift) {
		
		this.removeOptions();
		
		let oldIndex = this.notebook.chunks.indexOf(chunk);
		
		if (oldIndex < 0) throw new Error('Given chunk is not defined in a notebook!');
		if (!(chunk.block instanceof HTMLElement)) throw new Error('Block is not an instance of an HTMLElement!');
		
		let newIndex = Math.max(0, Math.min(this.notebook.chunks.length, oldIndex + shift));
		
		this.notebook.chunks.splice(newIndex, 0, this.notebook.chunks.splice(oldIndex, 1)[0]);
		
		this.updateBlocksPositions();
		
	}
	
	/**
	 * @param {typeof LTNChunk} chunkConstructor
	 * */
	createChunk(chunkConstructor) {
		
		this.removeOptions();
		
		(async () => {
			
			const chunk = new chunkConstructor();
			chunk.userTitle = chunkConstructor.title;
			this.notebook.chunks.push(chunk);
			
			await this.renderChunk(chunk);
			
			this.updateBlocksPositions();
			
		})();
		
	}
	
}
