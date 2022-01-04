import "../../libs/ace/ace.js";
import "../../libs/ace/ext-language_tools.js";

ace.config.set("basePath", "../../libs/ace");
ace.require("ace/ext/language_tools");

export default function () {
	
	let editorElement = document.createElement('pre');
	editorElement.style.margin = "0";
	
	let editor = ace.edit(editorElement, {
		maxLines: 60,
		minLines: 4
	});
	
	editor.session.setUseWorker(false);
	editor.session.setMode("ace/mode/css");
	editor.setTheme("ace/theme/tomorrow");
	
	// enable autocompletion and snippets
	editor.setOptions({
		enableBasicAutocompletion: true,
		enableSnippets: true,
		enableLiveAutocompletion: true
	});
	
	return editor;
	
}
