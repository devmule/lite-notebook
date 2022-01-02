import buildEditor from "./build-css-editor.js";


/**
 * @class {HTMLExecutor}
 * @implements {LTNChunk}
 * */
export default class CSSExecutor {
	constructor() {
		/**@type {Ace.Editor}*/
		this.view = null;
		this.css = '';
	}
	
	static get title() {
		return "CSS executor";
	}
	
	async init(data) {
		this.css = data.css;
	}
	
	async save() {
		return {css: this.view.session.getValue()};
	}
	
	async renderEditor() {
		
		this.view = buildEditor();
		this.view.session.setValue(this.css);
		
		// возвращаем дом-элемент
		return this.view.container;
	}
	
	async renderReport() {
		
		// создать элемент со стилями
		let style = document.createElement('style');
		style.appendChild(document.createTextNode(this.css));
		
		// применить его в заголовке документа
		let head = document.head || document.getElementsByTagName('head')[0];
		head.appendChild(style);
		
		return null;
		
	}
}

LTN.chunks["CSSExecutor"] = CSSExecutor;
