/* global katex */
/* global mermaid */

import {marked} from "../../libs/marked/marked.js";
import "../../libs/katex/katex.js";
import "../../libs/mermaid.js"

import renderMathInElement from "./render-math-in-element.js"
import {fetchCSS} from "../../utils/files.js";

let renderer = false;

const MERMAID_KEYS = ["mermaid", "graph"];

export default async function (text) {
	
	if (!renderer) {
		
		mermaid.mermaidAPI.initialize({startOnLoad: false});
		
		await fetchCSS("../libs/katex/katex.css");
		await fetchCSS("../libs/marked/styles.css");
		
		renderer = new marked.Renderer();
		
		const originalRendererLink = renderer.link.bind(renderer);
		renderer.link = async (href, title, text) => {
			if (!href.startsWith('http')) {
				href = await LTN.files.getFileAsDataURL(href);
			}
			return await originalRendererLink(href, title, text, '_blank');
		};
		
		const originalRendererImage = renderer.image.bind(renderer);
		renderer.image = async (href, title, text) => {
			
			let centered = false;
			if (!href.startsWith('http')) {
				centered = (new URL("http://" + href)).searchParams.get("style") === "center";
				href = await LTN.files.getFileAsDataURL(href);
			}
			return await originalRendererImage(href, title, text, centered);
		};
		
		const originalRendererCode = renderer.code.bind(renderer);
		renderer.code = function (code, infoString, escaped) {
			if (MERMAID_KEYS.indexOf(infoString) >= 0) {
				let graph = mermaid.mermaidAPI.render('null', code, () => null);
				return '<div class="mermaid-graph">' + graph + '</div>';
			} else {
				return originalRendererCode(code, infoString, escaped);
			}
		};
	}
	
	let element = document.createElement('span');
	element.innerHTML = await marked(text, {renderer});
	renderMathInElement(element);
	
	element.classList.add("markdown-body");
	
	return element;
	
}
