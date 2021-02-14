// ================================================================================================================== //
//
//                                      made by devmule https://github.com/devmule
//                                                      14.02.2021
//
// ================================================================================================================== //

// подключение либ

// Ace - встроенный редактор кода
const ace = require("brace");
require("brace/mode/javascript");
require("brace/mode/python");
require("brace/theme/twilight");

// mathjax - рендер LaTeX математических формул
// подключается со странички

// pyodide - интерпретатор питона
// require("pyodide");


// ================================================================================================================== //

import {renderMD} from "./render/index.js";

const lite_notebook = {
	
	// settings
	root: "",
	screen: "",
	
	// methods
	render_path: render_path,
};
window.lite_notebook = lite_notebook;

async function render_path(root) {
	lite_notebook.root = root;
	lite_notebook.screen = document.getElementById("screen");
	
	let md = await fetch(root + "/notebook");
	let text = await md.text();
	
	await languagePluginLoader;
	await renderMD(text, lite_notebook.screen);
}
