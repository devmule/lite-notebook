import "../../libs/ace/ace.js";
import "../../libs/ace/ext-language_tools.js";

ace.config.set("basePath", "../../libs/ace");
ace.require("ace/ext/language_tools");

export default function () {
	
	let editorElement = document.createElement('pre');
	
	let editor = ace.edit(editorElement, {
		maxLines: 60,
		minLines: 4
	});
	
	editor.session.setUseWorker(false);
	editor.session.setMode("ace/mode/html");
	editor.setTheme("ace/theme/tomorrow");
	
	// enable autocompletion and snippets
	editor.setOptions({
		enableBasicAutocompletion: true,
		enableSnippets: true,
		enableLiveAutocompletion: false
	});
	
	return editor;
	
}
