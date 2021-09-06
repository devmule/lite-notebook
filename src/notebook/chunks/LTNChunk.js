/**
 * @const
 * @readonly
 * */
const UNIMPLEMENTED_ERROR = 'Method must be implemented in child class!';

/**
 * @typedef {any} LTNChunkData
 * */

/**
 * @module LTNChunk
 * @class
 */
export default class LTNChunk {
	
	constructor() {
		
		/**
		 * @type {HTMLElement|undefined};
		 * */
		this.block = undefined;
		
		/**
		 * @type {string};
		 * */
		this.userTitle = 'default';
	}
	
	/**
	 * @static
	 * @abstract
	 * @return {string}
	 * */
	static get title() {
		throw new Error(UNIMPLEMENTED_ERROR);
	}
	
	/**
	 * @abstract
	 * @param {LTNChunkData} data
	 * @return {Promise}
	 * */
	async init(data) {
		throw new Error(UNIMPLEMENTED_ERROR);
	}
	
	/**
	 * @abstract
	 * @return {Promise.<LTNChunkData>}
	 * */
	async save() {
		throw new Error(UNIMPLEMENTED_ERROR);
	}
	
	/**
	 * При рендере редактора чанк обязан вернуть элемент.
	 * @abstract
	 * @return {Promise.<HTMLElement>}
	 * */
	async renderEditor() {
		throw new Error(UNIMPLEMENTED_ERROR);
	}
	
	/**
	 * При рендере репорта чанк может не возвращать элемент для визуализации,
	 * но, например, сделать определённые фоновые вычисления.
	 * @abstract
	 * @return {Promise.<HTMLElement|undefined>}
	 * */
	async renderReport() {
		throw new Error(UNIMPLEMENTED_ERROR);
	}
	
}
