import buildConsole from "./build-console.js";

/**
 * @class {PythonExecutor}
 * @implements {LTNChunk}
 * */
export default class PythonExecutor {
	constructor() {
		/**@type {Ace.Editor}*/
		this.view = null;
	}
	
	static get title() {
		return "Python console";
	}
	
	async delete() {
	}
	
	async init(data) {
	}
	
	async save() {
		return {};
	}
	
	async renderEditor() {
		// todo
		//  отправляем пустой элемент, никаких настроек не надо.
		return document.createElement('div');
	}
	
	async renderReport() {
		// todo
		return await buildConsole();
	}
}

LTN.chunks["PythonExecutor"] = PythonExecutor;
