import Chunk from "./Chunk";

export default class ChunkMarkDown extends Chunk {
	
	constructor() {
		super();
		if (!ChunkMarkDown.init) {
			ChunkMarkDown.init = true;
			ChunkMarkDown.TAG_NAME = "user-markdown";
			ChunkMarkDown.renderer = null;
		}
	}
	
	async render(notebook) {
		
		if (!ChunkMarkDown.renderer) { // init renderer
			ChunkMarkDown.renderer = new marked.Renderer();
			
			const originalRendererLink = ChunkMarkDown.renderer.link.bind(ChunkMarkDown.renderer);
			const originalRendererImage = ChunkMarkDown.renderer.image.bind(ChunkMarkDown.renderer);
			
			// todo local files from notebook files
			
			ChunkMarkDown.renderer.link = (href, title, text) => {
				if (!href.startsWith('http')) href = (() => lite_notebook.root)() + '/' + href;
				let link = originalRendererLink(href, title, text);
				link = link.replace("<a", "<a target='_blank'");
				return link;
			};
			
			ChunkMarkDown.renderer.image = (href, title, text) => {
				if (!href.startsWith('http')) href = (() => lite_notebook.root)() + '/' + href;
				return originalRendererImage(href, title, text);
			};
		}
		
		let el = document.createElement("div");
		el.innerHTML = marked(this.content, {renderer: ChunkMarkDown.renderer});
		if (el.classList) el.classList.add(ChunkMarkDown.TAG_NAME);
		
		notebook.screen.appendChild(el);
	}
}