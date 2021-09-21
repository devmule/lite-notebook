import LTNChunk from "./LTNChunk.js";

/**
 * @typedef {LTNChunkData} LTNChunkHTMLData
 * @property {string} text
 * */


export default class LTNChunkHTML extends LTNChunk {
	// todo use https://codemirror.net/6/
	
	constructor() {
		super();
		
		/**
		 * @type {string}
		 * @private
		 * */
		this.text = '';
	}
	
	static get title() {
		return "HTML";
	}
	
	/**
	 * @param {LTNChunkHTMLData} data
	 * */
	async init(data) {
	}
	
	/**
	 * @return {Promise.<HTMLInputElement>}
	 * */
	async renderEditor() {
	}
	
	/**
	 * @return {Promise.<undefined>}
	 * */
	async renderReport() {
	}
	
	/**
	 * @return {Promise.<LTNChunkHTMLData>}
	 * */
	async save() {
	}
}
