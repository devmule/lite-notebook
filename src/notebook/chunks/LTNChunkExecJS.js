import LTNChunk from "./LTNChunk.js";

export default class LTNChunkExecJS extends LTNChunk {
	async init(data) {
	}
	
	async renderEditor() {
		return document.createElement('input')
	}
	
	async renderReport() {
	}
	
	async save() {
	}
}
