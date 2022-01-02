export default class LTNChunkExecJS {
	constructor() {
		/**@type {HTMLInputElement}*/
		this.view = null;
		this.code = '';
	}
	
	async init(data) {
		this.code = data.code;
	}
	
	async save() {
		return {code: this.view.value};
	}
	
	static get title() {
		return "JavaScript executor";
	}
	
	async renderEditor() {
		this.view = document.createElement("input");
		this.view.value = this.code;
		this.view.addEventListener("change", () => {
			this.code = this.view.value;
		});
		return this.view;
	}
	
	async renderReport() {
		
		// заданный код исполняется
		(new Function(this.code))();
		
		// чанк не отображается
		return null;
		
	}
}

LTN.chunks.LTNChunkExecJS = LTNChunkExecJS;
