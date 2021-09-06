import LTNChunk from "./LTNChunk.js";

/**
 * @typedef {Object} LTNChunkCSSData
 * @property {string} text
 * */


export default class LTNChunkCSS extends LTNChunk {
	// todo use https://codemirror.net/6/
	
	constructor() {
		super();
		
		/**
		 * @type {string}
		 * @private
		 * */
		this.text = '';
		
		this.CSSEditor = null;
	}
	
	static get title() {
		return "CSS";
	}
	
	/**
	 * @param {LTNChunkCSSData} data
	 * */
	async init(data) {
		this.text = data.text;
	}
	
	/**
	 * @return {Promise.<HTMLInputElement>}
	 * */
	async renderEditor() {
		
		if (this.CSSEditor != null) throw new Error('Something went wrong! Can not render twice!');
		
		this.CSSEditor = document.createElement('input');
		this.CSSEditor.addEventListener('change', () => this.text = this.CSSEditor.value);
		
		return this.CSSEditor;
		
	}
	
	/**
	 * @return {Promise.<undefined>}
	 * */
	async renderReport() {
		
		let head = document.head || document.getElementsByTagName('head')[0];
		let style = document.createElement('style');
		
		head.appendChild(style);
		
		style.type = 'text/css';
		if (style.styleSheet) {
			// This is required for IE8 and below.
			style.styleSheet.cssText = this.text;
		} else {
			style.appendChild(document.createTextNode(this.text));
		}
		
	}
	
	/**
	 * @return {Promise.<LTNChunkCSSData>}
	 * */
	async save() {
		return {text: this.text};
	}
}
