/**
 * @typedef {Object} NotebookOptions
 * @property {Object<string, typeof LTNChunk>} handlers
 * */

/**
 * @typedef {Object} NotebookChunkData		- Прослойка данных для определения обработчика.
 * @property {LTNChunkData} data			- Данные текущего чанка.
 * @property {string} name					- Идентификатор типа обработчика, его название.
 * @property {string} title					- Подпись чанка. Нужно только для редактора.
 * @property {boolean} collapsed			- Свёрнут ли чанк. Нужно только для редактора.
 * */

/**
 * @typedef {Object} FileData				- Данные файла в бинарном формате.
 * @property {string} data
 * @property {string} name
 * @property {string} type
 * */

/**
 * @typedef {Object} NotebookData			- Данные ноутбука в сыром виде.
 * @property {number} creationTime			- Timestamp, время создания {@link Notebook}.
 * @property {string} name					- Название этого {@link Notebook}.
 * @property {FileData[]} files				- Файлы, прикреплённые к {@link Notebook} в бинарном формате.
 * @property {NotebookChunkData[]} chunks	- Список чанков в сыром виде.
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
		 * @type {File[]}
		 * */
		this.files = [];
		
		
		/**
		 * @type {number}
		 * @private
		 * */
		this.creationTime = Date.now();
		
		
		/**
		 * @type {string}
		 * */
		this.name = 'notebook';
		
	}
	
	/**
	 * Асинхронный метод. Сохраняет данные в виде сырого JS объекта.
	 * @return {NotebookData}
	 * */
	async save() {
		
		const aNotebookData = {
			creationTime: this.creationTime,
			name: this.name,
			files: [],
			chunks: [],
		};
		
		
		for (let i = 0; i < this.files.length; i++) {
			const file = this.files[i];
			
			// todo binary zlib?
			const base64 = await new Promise((resolve) => {
				const reader = new FileReader();
				reader.onloadend = () => resolve(reader.result);
				reader.readAsDataURL(file);
			})
			
			/** @type {FileData} */
			const fileData = {
				data: base64,
				name: file.name,
				type: file.type
			};
			
			aNotebookData.files.push(fileData);
		}
		
		
		for (let i = 0; i < this.chunks.length; i++) {
			const ch = this.chunks[i];
			
			const handler = this.handlers.find(c => c.constructor === ch.constructor);
			if (!handler) throw new TypeError(`Unknown handler type \"${ch.constructor.name}\"`)
			
			/** @type {NotebookChunkData} */
			let aNotebookChunkData = {
				name: handler.name,
				data: await ch.save(),
				
				title: ch.userTitle,
				collapsed: ch.collapsed,
			};
			
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
		this.name = aNotebookData.name;
		
		
		for (let i = 0; i < aNotebookData.files.length; i++) {
			/** @type {FileData} */
			let aFileData = aNotebookData.files[i];
			
			/** @type {File} */
			let file = new File([aFileData.data], aFileData.name, {type: aFileData.type});
			
			this.files.push(file);
		}
		
		
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
			aChunk.collapsed = aNotebookChunkData.collapsed;
			await aChunk.init(aNotebookChunkData.data);
			
		}
	}
}
