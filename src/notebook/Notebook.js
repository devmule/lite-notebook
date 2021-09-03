import LTNChunk from "./chunks/LTNChunk.js";


/**
 * @typedef {Object} NotebookOptions
 * @property {Object<string, typeof LTNChunk>} handlers
 * */

/**
 * @typedef {Object} NotebookData
 * @property {LTNChunkData[]} chunks	- список чанков в сыром виде
 * @property {number} creationTime		- timestamp время создания
 * */


/**
 * Модуль класса Notebook.
 * @module Notebook
 * @class
 */
export class Notebook {
	
	/**
	 * @constructor
	 * @param {NotebookOptions} options
	 * */
	constructor(options) {
		
		if (!(options instanceof Object)) throw new Error('Notebook.options must be implemented!');
		if (!(options.handlers instanceof Object)) throw new Error('Given options.handlers must be implemented!');
		
		
		/**
		 * Словарь обработчиков, заданных по принципу {name: constructor...}.
		 * @type {{name: string, constructor: typeof LTNChunk}[]}
		 * @private
		 * */
		this.handlers = [];
		
		for (const [name, constructor] of Object.entries(options.handlers)) {
			let copy = this.handlers.find(h => h.constructor === constructor);
			if (copy) throw new Error('Given options.handlers must be unique!');
			this.handlers.push({name, constructor});
		}
		
		/**
		 * @type {LTNChunk[]}
		 * @private
		 * */
		this.chunks = [];
		
		
		/**
		 * @type {number}
		 * @private
		 * */
		this.creationTime = Date.now();
		
	}
	
	/**
	 * Асинхронный метод. Сохраняет данные в виде сырого JS объекта.
	 * @return {NotebookData}
	 * */
	async save() {
		
		const aNotebookData = {
			creationTime: this.creationTime,
			chunks: []
		};
		
		for (let i = 0; i < this.chunks.length; i++) {
			const ch = this.chunks[i];
			
			
			aNotebookData.chunks.push(await ch.save());
		}
		
		return aNotebookData;
	}
	
	/**
	 * Асинхронный метод. Принимает данные в сыром виде,
	 * создаёт экземпляры обработчиков согласно заданным данным.
	 * Используется при загрузке существующего ноутбука для отрисовки имеющихся данных.
	 * @param {NotebookData} aNotebookData
	 * */
	async init(aNotebookData) {
		this.creationTime = aNotebookData.creationTime;
		
		for (let i = 0; i < aNotebookData.chunks.length; i++) {
			
			const aChunkData = aNotebookData.chunks[i];
			
			const handler = this.handlers.find(c => c.name === aChunkData.name);
			if (!handler) throw new TypeError(`Unknown type \"${aChunkData.type}\"`)
			
			/** @type {typeof LTNChunk} */
			const handlerClass = handler.constructor;
			
			/** @type {LTNChunk} */
			const aChunk = new handlerClass();
			this.chunks.push(aChunk);
			
			await aChunk.init(aChunkData);
		}
	}
}
