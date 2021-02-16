// ================================================================================================================== //
//
//                                      made by devmule https://github.com/devmule
//                                                      14.02.2021
//
// ================================================================================================================== //

// подключение либ

// Ace - встроенный редактор кода
// подключается со странички
//const ace = require("brace");
//require("brace/mode/javascript");
//require("brace/mode/python");
//require("brace/theme/twilight");

// mathjax - рендер LaTeX математических формул
// подключается со странички

// pyodide - интерпретатор питона
// подключается со странички или в воркере
// require("pyodide");


// ================================================================================================================== //

// renderMD - рендер разметки
import {renderMD} from "./render/index.js";
// pyWorker - python обработчик, работающий через web worker
import {worker_api} from "./py_worker/worker_api.js";
import elements from "./elements/index.js";

const lite_notebook = {
	// settings
	root: "",
	screen: null,
	workerURL: "dist/worker.js",
	
	// DOM elements
	elements: elements,
	
	// methods
	render_path: render_path,
	
	// worker
	get pyWorker() {
		return worker_api(lite_notebook.workerURL);
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
