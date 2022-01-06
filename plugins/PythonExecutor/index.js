import {buildConsole, buildEditor} from "./build-console.js";
import {generateId} from "../../utils/crypto.js";

/**
 * @class {PythonExecutor}
 * @implements {LTNChunk}
 * */
export default class PythonExecutor {
	constructor() {
		this.id = "console_" + generateId(5);
	}
	
	static get title() {
		return "Python console";
	}
	
	async delete() {
	}
	
	async init(data) {
		this.id = data.id;
	}
	
	async save() {
		return {
			id: this.id
		};
	}
	
	async renderEditor() {
		let elem = await buildEditor(this.id);
		elem.addEventListener('changed', (e) => this.id = e.id);
		return elem;
	}
	
	async renderReport() {
		let elem = await buildConsole();
		elem.id = this.id;
		return elem;
	}
}

LTN.chunks["PythonExecutor"] = PythonExecutor;
