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

// renderMD - рендер разметки
import {renderMD} from "./render/index.js";
// pyWorker - python обработчик, работающий через web worker
import {pyWorker} from "./pyWorker.js";

const lite_notebook = {
	
	// settings
	root: "",
	screen: "",
	
	// methods
	render_path: render_path,
	
	// worker
	get pyWorker() {
		return pyWorker();
	}
};
window.lite_notebook = lite_notebook;

async function render_path(root) {
	lite_notebook.root = root;
	lite_notebook.screen = document.getElementById("screen");
	
	let md = await fetch(root + "/notebook");
	let text = await md.text();
	
	await renderMD(text, lite_notebook.screen);
}
