import * as elements from "./elements.js";

import {Notebook} from "../notebook/Notebook.js";

import LTNChunkCSS from "../notebook/chunks/LTNChunkCSS.js";
import LTNChunkExecJS from "../notebook/chunks/LTNChunkExecJS.js";
import LTNChunkLibJS from "../notebook/chunks/LTNChunkLibJS.js";

export default class Screen {
	
	/**
	 * @constructor
	 * @param {boolean} isEditor
	 * @param {?NotebookData} [data=undefined];
	 * */
	constructor(isEditor, data) {
		
		this.element = elements.createScreen();
		this.isEditor = isEditor
		
		this.notebook = new Notebook({
			handlers: {
				LTNChunkCSS,
				LTNChunkExecJS,
				LTNChunkLibJS
			}
		});
		
		
		// Сейчас нужно вызвать ряд асинхронных функций для инициализации ноутбка и экрана.
		// Конструктор не может быть асинхронным и не может вызвать асинсхронный метод,
		// чтобы это поправить создаём и вызываем анонимную асинхронную функци.
		(async () => {
			
			this.loading = true;
			
			// инициализация чанков, перевод из JSON вида в список обработчиков
			if (data != null) await this.notebook.init(data);
			
			// отрисовать на экране инициализованные чанки
			for (let i = 0; i < this.notebook.chunks.length; i++) {
				
				try {
					let chunk = this.notebook.chunks[i];
					
					let content = this.isEditor ? await chunk.renderEditor() : await chunk.renderReport();
					let needOptions = this.isEditor;
					let onOptionsClick = () => null; // todo
					
					let block = elements.createContentBlock(content, needOptions, onOptionsClick);
					this.element.appendChild(block);
					
				} catch (e) {
					// todo вывести ошибку на экран
				}
				
			}
			
			const newBlock = elements.createNewBlock(this.onNewClick.bind(this));
			this.element.appendChild(newBlock);
			
			this.loading = false;
			
		})();
		
		
	}
	
	
	onNewClick() {
	
	}
	
	
	/**
	 * @param {boolean} val
	 * */
	set loading(val) {
	
	}
}
