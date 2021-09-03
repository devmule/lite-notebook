import * as elements from "./elements.js";

import {Notebook} from "../notebook/Notebook.js";

import LTNChunkCSS from "../notebook/chunks/LTNChunkCSS.js";
import LTNChunkExecJS from "../notebook/chunks/LTNChunkExecJS.js";
import LTNChunkLibJS from "../notebook/chunks/LTNChunkLibJS.js";
import LTNChunkText from "../notebook/chunks/LTNChunkText.js";

export default class Screen {
	
	/**
	 * @constructor
	 * @param {boolean} isEditor
	 * @param {?NotebookData} [data=undefined]
	 * */
	constructor(isEditor, data) {
		
		this.element = elements.createScreen();
		
		this.isEditor = isEditor
		
		this.notebook = new Notebook({
			handlers: {
				LTNChunkCSS,
				LTNChunkExecJS,
				LTNChunkLibJS,
				LTNChunkText
			}
		});
		
		/**
		 * @type {HTMLElement|undefined}
		 * @private
		 * */
		this.elemOptions = undefined;
		
		
		/**
		 * @type {HTMLElement|undefined}
		 * @private
		 * */
		this.newBlock = undefined;
		
		
		// Сейчас нужно вызвать ряд асинхронных функций для инициализации ноутбка и экрана.
		// Конструктор не может быть асинхронным и не может вызвать асинсхронный метод,
		// чтобы это поправить создаём и вызываем анонимную асинхронную функци.
		(async () => {
			
			this.loading = true;
			
			// инициализация чанков, перевод из JSON вида в список обработчиков
			if (data != null) await this.notebook.init(data);
			
			// отрисовать на экране инициализованные чанки
			for (let i = 0; i < this.notebook.chunks.length; i++) {
				const chunk = this.notebook.chunks[i];
				await this.renderChunk(chunk);
			}
			
			// Если происходит отрисовка в режиме редактора,
			// то нужно добавить элемент создания.
			if (this.isEditor) {
				this.newBlock = elements.createNewBlock(this.onPlusClick.bind(this));
				this.element.appendChild(this.newBlock);
			}
			
			this.updateBlocksPositions();
			
			this.loading = false;
			
		})();
		
		
	}
	
	
	/**
	 * @param {LTNChunk} chunk
	 * @param {HTMLElement} content
	 * @param {HTMLElement} elemOptBtn
	 * */
	onBlockOptionsClick(chunk, content, elemOptBtn) {
		this.createOptions(elemOptBtn,
			"Создать блок",
			[
				{name: "log1", func: () => console.log(123)},
				{name: "log2", func: () => console.log(321)}
			]
		);
	}
	
	
	/**
	 * @param {HTMLElement} elemOptBtn
	 * @void
	 * */
	onPlusClick(elemOptBtn) {
		
		let options = [];
		for (let i = 0; i < this.notebook.handlers.length; i++) {
			let handler = this.notebook.handlers[i];
			options.push({name: handler.name, func: this.createChunk.bind(this, handler.constructor)});
		}
		
		this.createOptions(elemOptBtn, "Создать блок", options);
	}
	
	/**
	 * @void
	 * */
	removeOptions() {
		
		if (this.elemOptions instanceof HTMLElement) this.elemOptions.remove();
		this.elemOptions = null;
		
	}
	
	
	/**
	 * @param {HTMLElement} elemOptBtn
	 * @param {string} title
	 * @param {{name:string, func: function(any)}[]} options
	 * @void
	 * */
	createOptions(elemOptBtn, title, options) {
		
		this.removeOptions();
		
		let opt = elements.createOptionsList(title, options);
		let rect = elemOptBtn.getBoundingClientRect();
		opt.style.top = `${rect.top}px`;
		
		opt.addEventListener("pointerleave", this.removeOptions.bind(this));
		
		this.elemOptions = opt;
		this.element.appendChild(opt);
		
	}
	
	
	/**
	 * @param {typeof LTNChunk} chunkConstructor
	 * */
	createChunk(chunkConstructor) {
		
		this.removeOptions();
		
		(async () => {
			
			this.loading = true;
			
			const chunk = new chunkConstructor();
			this.notebook.chunks.push(chunk);
			
			await this.renderChunk(chunk);
			
			this.updateBlocksPositions();
			
			this.loading = false;
			
		})();
		
	}
	
	/**
	 * @param {LTNChunk} chunk
	 * */
	async renderChunk(chunk) {
		try {
			
			const content = this.isEditor ? await chunk.renderEditor() : await chunk.renderReport();
			
			if (content instanceof HTMLElement) {
				let block = elements.createContentBlock(
					content,
					this.onBlockOptionsClick.bind(this, chunk, content));
				
				// todo chunk.container = block; ??
				
				this.element.appendChild(block);
			}
			
		} catch (e) {
			// todo вывести ошибку на экран
			console.error(e);
		}
	}
	
	/**
	 * @void
	 * */
	updateBlocksPositions() {
		if (this.newBlock instanceof HTMLElement) {
			this.newBlock.remove();
			this.element.appendChild(this.newBlock);
		}
	}
	
	
	/**
	 * @param {boolean} val
	 * */
	set loading(val) {
	
	}
	
}
