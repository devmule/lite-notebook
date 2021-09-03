import LTNChunk from "./LTNChunk.js";

export default class LTNChunkLibJS extends LTNChunk {
	constructor() {
		super();
		this.urls = [];
	}
	
	
	async init(data) {
	}
	
	async renderEditor() {
		return document.createElement('input')
	}
	
	async renderReport() {
	}
	
	async save() {
	}
	
	async loadLib(url) {
		return new Promise((resolve, reject) => {
			let scriptTag = document.createElement('script');
			document.head.appendChild(scriptTag);
			
			scriptTag.src = url;
			scriptTag.async = false;
			scriptTag.onload = resolve;
			scriptTag.onerror = reject;
		});
	}
}
