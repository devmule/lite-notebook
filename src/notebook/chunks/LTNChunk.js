/**
 * @const
 * @readonly
 * */
const UNIMPLEMENTED_ERROR = 'Method must be implemented in child class!';

/**
 * @typedef {any} LTNChunkData
 * */

/**
 * Абстрактный класс {@link LTNChunk}.
 * @module LTNChunk
 * @class
 */
export default class LTNChunk {
	
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
	 * @abstract
	 * @return {Promise.<HTMLElement|undefined>}
	 * */
	async renderEditor() {
		throw new Error(UNIMPLEMENTED_ERROR);
	}
	
	/**
	 * @abstract
	 * @return {Promise.<HTMLElement|undefined>}
	 * */
	async renderReport() {
		throw new Error(UNIMPLEMENTED_ERROR);
	}
	
}
