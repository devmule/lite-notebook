// Ace
var Ace = require('ace-code-editor/lib/ace/ace');


function render_path(root) {
	lite_notebook.root = root;
	
	let screen = document.getElementById("screen");
}

const lite_notebook = {
	root: "",
	render_path: render_path,
};

window.lite_notebook = lite_notebook;
