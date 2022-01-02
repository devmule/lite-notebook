/* global katex */
import "../../libs/ace/ace.js";
import "../../libs/ace/ext-language_tools.js";
import "../../libs/katex/katex.js";

ace.config.set("basePath", "../../libs/ace");
ace.require("ace/ext/language_tools");


export function editor() {
	
	let editorElement = document.createElement('div');
	
	let editor = ace.edit(editorElement, {
		maxLines: 60,
		minLines: 4
	});
	
	editor.session.setUseWorker(false);
	editor.session.setMode("ace/mode/latex");
	editor.setTheme("ace/theme/tomorrow");
	
	// enable autocompletion and snippets
	editor.setOptions({
		enableBasicAutocompletion: true,
		enableSnippets: true,
		enableLiveAutocompletion: true
	});
	
	return editor;
	
}


export function render(text) {
	
	let element = document.createElement('div');
	try {
		katex.render(text, element);
	} catch (e) {
		if (!(e instanceof katex.ParseError)) throw e;
		element.appendChild(document.createTextNode(text));
	}
	return element;
	
}
