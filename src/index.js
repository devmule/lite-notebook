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
import {renderMD} from "./render";
// pyWorker - python обработчик, работающий через web worker
import {worker_api} from "./py_worker/worker_api.js";
import elements from "./elements/index.js";

const lite_notebook = {
	// settings
	root: "",
	hierarchy: {},
	screen: null,
	workerURL: "dist/worker.js",
	
	// DOM elements
	elements: elements,
	
	// methods
	// render_path: render_path,
	load_hierarchy: load_hierarchy,
	
	// worker
	get pyWorker() {
		return worker_api(lite_notebook.workerURL);
	}
};
window.lite_notebook = lite_notebook;

async function render_path(path) {
	let {node, root} = await get_hierarchy_node(path);
	if (node) {
		let menu_elements = document.getElementById("menu").getElementsByClassName("menu-elem");
		for (let i = 0; i < menu_elements.length; i++) {
			let el = menu_elements[i];
			if (el.getAttribute("path") === path) el.classList.add("active");
			else el.classList.remove("active");
		}
		
		document.title = node.name;
		
		const url = window.location.href.split('?');
		window.history.pushState(null, null, url[0] + '?page=' + root);
		
		lite_notebook.root = root;
		lite_notebook.screen = document.getElementById("screen");
		lite_notebook.screen.innerHTML = "";
		
		let md = await fetch(root + "/notebook");
		let text = await md.text();
		
		await renderMD(text, lite_notebook.screen);
		
		await MathJax.typesetPromise();
		
	} else {
		await render_path("notebooks");
	}
	
}

async function load_hierarchy(src) {
	let hierarchy_file = await fetch(src);
	let hierarchy_text = await hierarchy_file.text();
	
	if (hierarchy_text) {
		lite_notebook.hierarchy = JSON.parse(hierarchy_text);
		
		let url = new URL(window.location.href);
		let root = url.searchParams.get('page') || "notebooks";
		
		await load_menu();
		await render_path(root);
		
	} else {
		throw new Error('Error. no hierarchy file!');
	}
}

async function get_hierarchy_node(root) {
	let path = root.split('/');
	let node = lite_notebook.hierarchy; // корень иерархии
	let real_path = [node.src];
	let depth = 0;
	
	while (node.src === path[depth]) {
		depth++;
		if (depth < path.length) {
			let src = path[depth];
			let child = node.children.find(c => c.src === src);
			if (child) {
				node = child;
				real_path.push(node.src)
			} else break;
		} else break;
	}
	
	return {node, root: real_path.join('/')};
}

async function load_menu() {
	let menu = document.getElementById("menu");
	menu.innerHTML = "";
	
	let draw_hi = (node, depth, path) => {
		let el = document.createElement("p");
		el.style.paddingLeft = `${12 * depth}px`
		el.innerText = node.name;
		el.classList.add("menu-elem");
		menu.appendChild(el);
		
		let notebook_path = path + node.src;
		el.onclick = () => render_path(notebook_path);
		el.setAttribute("path", notebook_path);
		for (let i = 0; i < node.children.length; i++) draw_hi(node.children[i], depth + 1, notebook_path + "/");
	}
	
	draw_hi(lite_notebook.hierarchy, 1, "");
}
