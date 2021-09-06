import * as elements from "./elements.js";

import {Notebook} from "../notebook/Notebook.js";


// todo import from one file as an array of chunk constructors
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
		
		this.isEditor = isEditor;
		
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
		this.plusBlock = undefined;
		
		
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
				this.plusBlock = elements.createPlusBlock(this.onPlusClick.bind(this));
				this.element.appendChild(this.plusBlock);
			}
			
			this.updateBlocksPositions();
			
			this.loading = false;
			
		})();
		
		
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
			
			let block = elements.createContentBlock(content);
			block.addEventListener('options', this.onBlockOptionsClick.bind(this, chunk));
			
			chunk.container = block;
			this.element.appendChild(block);
			
		}
		
	}
	
	/**
	 * @void
	 * */
	updateBlocksPositions() {
		if (this.plusBlock instanceof HTMLElement) {
			this.plusBlock.remove();
			this.element.appendChild(this.plusBlock);
		}
	}
	
	
	/**
	 * @param {boolean} val
	 * */
	set loading(val) {
	
	}
	
	
	// ==============================================================================
	// EDITOR ONLY
	
	/**
	 * @param {LTNChunk} chunk
	 * @param {HTMLElement} elemOptBtn
	 * */
	onBlockOptionsClick(chunk, elemOptBtn) {
		this.createOptions(elemOptBtn,
			"Настройки блока",
			[
				{name: "удалить", func: this.deleteChunk.bind(this, chunk)}
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
	 * @param {LTNChunk} chunk
	 * */
	deleteChunk(chunk) {
		
		this.removeOptions();
		
		let index = this.notebook.chunks.indexOf(chunk);
		let block = chunk.container;
		
		if (index < 0) throw new Error();
		if (!(block instanceof HTMLElement)) throw new Error();
		
		this.notebook.chunks.splice(index, 1);
		block.remove();
		
		this.updateBlocksPositions();
		
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
	
}
