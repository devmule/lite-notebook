/**
 * @class {HTMLExecutor}
 * @implements {LTNChunk}
 * */
export default class PythonExecutor {
	constructor() {
		/**@type {Ace.Editor}*/
		this.view = null;
		this.code = '';
	}
	
	static get title() {
		return "Python console";
	}
	
	async init(data) {
		this.code = data.code;
	}
	
	async save() {
		return {code: this.view.session.getValue()};
	}
	
	async renderEditor() {
		// todo
	}
	
	async renderReport() {
		// todo
	}
}

LTN.chunks["PythonExecutor"] = PythonExecutor;
