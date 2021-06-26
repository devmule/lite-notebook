import Chunk from "./Chunk";

export default class ChunkLib extends Chunk {
	constructor() {
		super();
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
	
	async render(notebook) {
		let lines = this.content.split("\n");
		for (let i = 0; i < lines.length; i++) {
			let line = lines[i].trim();
			if (line) {
				
				let index = line.indexOf(":");
				if (index < 0) continue;
				
				let type = line.slice(0, index).trim(),
					src = line.slice(index + 1, line.length).trim();
				
				if (type && src) await this.loadLib(src);
			}
		}
	}
}
