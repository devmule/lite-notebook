/**
 * @typedef {Object} NotebookOptions
 * @property {Object<string, typeof LTNChunk>} handlers
 * */

/**
 * @typedef {Object} NotebookChunkData		- Прослойка данных для определения обработчика.
 * @property {LTNChunkData} data			- Данные текущего чанка.
 * @property {string} name					- Идентификатор типа обработчика, его название.
 * @property {string} title					-
 * */

/**
 * @typedef {Object} NotebookData			- Данные ноутбука в сыром виде.
 * @property {NotebookChunkData[]} chunks	- Список чанков в сыром виде.
 * @property {number} creationTime			- Timestamp, время создания {@link Notebook}.
 * */


/**
 * Модуль класса Notebook.
 * @module Notebook
 * @class
 */
export default class Notebook {
	
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
		 * */
		this.handlers = [];
		
		for (const [name, constructor] of Object.entries(options.handlers)) {
			let copy = this.handlers.find(h => h.constructor === constructor);
			if (copy) throw new Error('Given options.handlers must be unique!');
			this.handlers.push({name, constructor});
		}
		
		/**
		 * @type {LTNChunk[]}
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
			
			const handler = this.handlers.find(c => c.constructor === ch.constructor);
			if (!handler) throw new TypeError(`Unknown handler type \"${ch.constructor.name}\"`)
			
			/** @type {NotebookChunkData} */
			let aNotebookChunkData = {
				title: ch.userTitle,
				name: handler.name,
				data: await ch.save(),
			}
			
			aNotebookData.chunks.push(aNotebookChunkData);
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
			
			/** @type {NotebookChunkData} */
			const aNotebookChunkData = aNotebookData.chunks[i];
			
			const handler = this.handlers.find(c => c.name === aNotebookChunkData.name);
			if (!handler) throw new TypeError(`Unknown handler type \"${aNotebookChunkData.name}\"`)
			
			/** @type {typeof LTNChunk} */
			const handlerClass = handler.constructor;
			
			/** @type {LTNChunk} */
			const aChunk = new handlerClass();
			this.chunks.push(aChunk);
			
			aChunk.userTitle = aNotebookChunkData.title;
			await aChunk.init(aNotebookChunkData.data);
			
		}
	}
}
