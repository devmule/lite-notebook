/* global katex */
/* global mermaid */

import {marked} from "../../libs/marked.js";
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
		
		renderer = new marked.Renderer();
		
		const originalRendererLink = renderer.link.bind(renderer);
		renderer.link = (href, title, text) => {
			if (!href.startsWith('http')) href = LTN.files.getFileAsDataURL(href);
			return originalRendererLink(href, title, text);
		};
		
		const originalRendererImage = renderer.image.bind(renderer);
		renderer.image = (href, title, text) => {
			if (!href.startsWith('http')) href = LTN.files.getFileAsDataURL(href);
			return originalRendererImage(href, title, text);
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
	element.innerHTML = marked(text, {renderer});
	renderMathInElement(element);
	
	return element;
	
}
