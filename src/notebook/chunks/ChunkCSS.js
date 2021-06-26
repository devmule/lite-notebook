const Chunk = require("./Chunk");

class ChunkCSS extends Chunk {
	async render(notebook) {
		// todo fix
		let styleTag = document.createElement('style');
		styleTag.appendChild(document.createTextNode(this.content));
		notebook.screen.appendChild(styleTag);
	}
}