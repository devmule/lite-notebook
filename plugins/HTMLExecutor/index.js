import buildEditor from "./build-editor.js";

export default class HTMLExecutor {
	constructor() {
		/**@type {Ace.Editor}*/
		this.view = null;
		this.doc = '';
	}
	
	async init(data) {
		this.doc = data.code;
	}
	
	async save() {
		return {code: this.view.session.getValue()};
	}
	
	static get title() {
		return "HTML executor";
	}
	
	async renderEditor() {
		
		this.view = buildEditor();
		this.view.session.setValue(this.doc);
		this.view.on("change", () => {
			this.doc = this.view.session.getValue();
		});
		
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
