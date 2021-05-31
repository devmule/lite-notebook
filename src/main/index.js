// ================================================================================================================== //
//
//                                      made by devmule https://github.com/devmule
//                                                      29.05.2021
//
// ================================================================================================================== //
import {MD_EVENTS} from "../ENUMS.js";

window.main = {
	root: "",
	
	frame_src: "frame.html",
	frame_id: "render-frame",
	frame: null,
	
	notebook_filename: "notebook",
	hierarchy: {},
	
	loader: null,
	loader_id: "loader",
	
	on_loaded: () => initiate_application('./notebooks/hierarchy.json'), // todo refactor
};


async function initiate_application(src) {
	let hierarchy_file = await fetch(src);
	let hierarchy_text = await hierarchy_file.text();
	
	if (hierarchy_text) {
		main.hierarchy = JSON.parse(hierarchy_text);
		
		let url = new URL(window.location.href);
		let root = url.searchParams.get('page') || "notebooks";
		
		main.frame = document.getElementById(main.frame_id);
		main.loader = document.getElementById(main.loader_id);
		
		await load_menu();
		await call_render(root);
		
	} else {
		throw new Error('Error. no hierarchy file!');
	}
}

async function get_hierarchy_node(root) {
	let path = root.split('/');
	let node = main.hierarchy; // корень иерархии
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
		
		let root = path + node.src;
		el.setAttribute("path", root); // сохраняется для выделения
		el.onclick = async () => await call_render(root);
		for (let i = 0; i < node.children.length; i++) draw_hi(node.children[i], depth + 1, root + "/");
	}
	
	draw_hi(main.hierarchy, 1, "");
}

let IS_WAITING_RENDER = false;

async function call_render(path) {
	if (!IS_WAITING_RENDER) {
		IS_WAITING_RENDER = true;
		main.loader.style.visibility = 'visible';
		
		main.root = window.location.href.split('?')[0];
		
		let {node, root} = await get_hierarchy_node(path);
		
		let file = await fetch(`${main.root}/${root}/${main.notebook_filename}`);
		let text = await file.text(); // todo file.json(); ???
		
		// show state in history
		document.title = node.name;
		window.history.pushState({}, node.name, `${main.root}?page=${root}`);
		
		// reload iframe
		await waitFrameReload(main.frame);
		// do render
		// todo wait until render ending
		let data = {type: MD_EVENTS.RENDER, text: text, root: root}
		main.frame.contentWindow.postMessage(JSON.stringify(data), window.location.href);
		
		// activate buttons
		let menu_elements = document.getElementById("menu").getElementsByClassName("menu-elem");
		for (let i = 0; i < menu_elements.length; i++) {
			let el = menu_elements[i];
			if (el.getAttribute("path") === path) el.classList.add("active");
			else el.classList.remove("active");
		}
		
		IS_WAITING_RENDER = false;
		main.loader.style.visibility = 'hidden';
	}
}

async function waitFrameReload(iFrame) {
	return new Promise((res, rej) => {
		try {
			iFrame.contentWindow.location.reload();
			iFrame.onload = () => res();
		} catch (e) {
			rej();
		}
	});
}