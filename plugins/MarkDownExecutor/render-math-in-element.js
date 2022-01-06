/* global katex */
import splitAtDelimiters from "./split-at-delimiters.js";

function splitWithDelimiters(text, delimiters) {
	let data = [{type: "text", data: text}];
	for (let i = 0; i < delimiters.length; i++) {
		let delimiter = delimiters[i];
		data = splitAtDelimiters(
			data, delimiter.left, delimiter.right,
			delimiter.display || false);
	}
	return data;
}

function renderMathInText(text, delimiters) {
	
	let data = splitWithDelimiters(text, delimiters);
	
	let fragment = document.createDocumentFragment();
	
	for (let i = 0; i < data.length; i++) {
		if (data[i].type === "text") {
			fragment.appendChild(document.createTextNode(data[i].data));
		} else {
			let span = document.createElement("span");
			let math = data[i].data;
			try {
				katex.render(math, span, {displayMode: data[i].display});
			} catch (e) {
				if (!(e instanceof katex.ParseError)) throw e;
				span.appendChild(document.createTextNode(data[i].rawData));
			}
			fragment.appendChild(span);
		}
	}
	
	return fragment;
}

function renderElem(elem, delimiters, ignoredTags) {
	for (let i = 0; i < elem.childNodes.length; i++) {
		let childNode = elem.childNodes[i];
		if (childNode.nodeType === 3) {
			// Text node
			let frag = renderMathInText(childNode.textContent, delimiters);
			i += frag.childNodes.length - 1;
			elem.replaceChild(frag, childNode);
		} else if (childNode.nodeType === 1) {
			// Element node
			let shouldRender = ignoredTags.indexOf(
				childNode.nodeName.toLowerCase()) === -1;
			
			if (shouldRender) {
				renderElem(childNode, delimiters, ignoredTags);
			}
		}
	}
}

const defaultOptions = {
	delimiters: [
		{left: "$$", right: "$$", display: true},
		{left: "\\[", right: "\\]", display: true},
		{left: "$", right: "$", display: false},
		{left: "\\(", right: "\\)", display: false}
	],
	ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"]
}

function extend(obj) {
	let source, prop;
	for (let i = 1, length = arguments.length; i < length; i++) {
		source = arguments[i];
		for (prop in source) {
			if (Object.prototype.hasOwnProperty.call(source, prop)) {
				obj[prop] = source[prop];
			}
		}
	}
	return obj;
}

export default function (elem, options) {
	if (!elem) throw new Error("No element provided to render");
	options = extend({}, defaultOptions, options);
	renderElem(elem, options.delimiters, options.ignoredTags);
};
