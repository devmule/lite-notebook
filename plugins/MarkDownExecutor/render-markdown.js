/* global katex */
/* global mermaid */

import {marked} from "../../libs/marked.js";
import "../../libs/katex/katex.js";
import "../../libs/mermaid.js"

import renderMathInElement from "./render-math-in-element.js"

let renderer = false;

const MERMAID_KEYS = ["mermaid", "graph"];

export default async function (text) {
	
	if (!renderer) {
		
		mermaid.mermaidAPI.initialize({startOnLoad: false});
		
		let style = document.createElement('link');
		style.rel = "stylesheet";
		style.href = "../libs/katex/katex.css";
		let head = document.head || document.getElementsByTagName('head')[0];
		head.appendChild(style);
		
		console.log(style, head);
		
		renderer = new marked.Renderer();
		
		const originalRendererLink = renderer.link.bind(renderer);
		renderer.link = (href, title, text) => {
			// todo link to file
			//if (!href.startsWith('http')) href = (() => lite_notebook.root)() + '/' + href;
			let link = originalRendererLink(href, title, text);
			//link = link.replace("<a", "<a target='_blank'");
			return link;
		};
		
		const originalRendererImage = renderer.image.bind(renderer);
		renderer.image = (href, title, text) => {
			// todo from file
			//if (!href.startsWith('http')) href = (() => lite_notebook.root)() + '/' + href;
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
	console.log(element.innerHTML)
	renderMathInElement(element);
	console.log(element.innerHTML)
	
	return element;
	
}
