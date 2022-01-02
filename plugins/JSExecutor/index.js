import buildEditor from "./build-js-editor.js";

export default class JSExecutor {
	constructor() {
		/**@type {Ace.Editor}*/
		this.view = null;
		this.code = '';
	}
	
	static get title() {
		return "JavaScript executor";
	}
	
	async init(data) {
		this.code = data.code;
	}
	
	async save() {
		return {code: this.view.session.getValue()};
	}
	
	async renderEditor() {
		
		this.view = buildEditor();
		this.view.session.setValue(this.code);
		
		// возвращаем дом-элемент
		return this.view.container;
	}
	
	async renderReport() {
		
		// заданный код исполняется
		(new Function(this.code))();
		
		// чанк не отображается
		return null;
		
	}
}

LTN.chunks["JSExecutor"] = JSExecutor;
