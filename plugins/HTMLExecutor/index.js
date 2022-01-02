import buildEditor from "./build-html-editor.js";


/**
 * @class {HTMLExecutor}
 * @implements {LTNChunk}
 * */
export default class HTMLExecutor {
	constructor() {
		/**@type {Ace.Editor}*/
		this.view = null;
		this.doc = '';
	}
	
	static get title() {
		return "HTML executor";
	}
	
	async init(data) {
		this.doc = data.doc;
	}
	
	async save() {
		return {doc: this.view.session.getValue()};
	}
	
	async renderEditor() {
		
		this.view = buildEditor();
		this.view.session.setValue(this.doc);
		
		// возвращаем дом-элемент
		return this.view.container;
	}
	
	async renderReport() {
		let div = document.createElement('div');
		div.innerHTML = this.doc;
		// возвращаем дом-элемент
		return div;
	}
}

LTN.chunks["HTMLExecutor"] = HTMLExecutor;
