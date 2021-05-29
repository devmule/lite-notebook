// ================================================================================================================== //
//
//                                      made by devmule https://github.com/devmule
//                                                      29.05.2021
//
// ================================================================================================================== //

window.main = {
	root: "",
	hierarchy: {},
	load_hierarchy,
};


async function load_hierarchy(src) {
	let hierarchy_file = await fetch(src);
	let hierarchy_text = await hierarchy_file.text();
	
	if (hierarchy_text) {
		main.hierarchy = JSON.parse(hierarchy_text);
		
		let url = new URL(window.location.href);
		let root = url.searchParams.get('page') || "notebooks";
		
		await load_menu();
		
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
		el.onclick = () => call_render(root);
		for (let i = 0; i < node.children.length; i++) draw_hi(node.children[i], depth + 1, root + "/");
	}
	
	draw_hi(main.hierarchy, 1, "");
}

let IS_WAITING_RENDER = false;

async function call_render(path) {
	if (!IS_WAITING_RENDER) {
		let n = get_hierarchy_node(path);
		//window.location.href = `${url}?page=${root}`;
		// todo do render
		// todo activate buttons
	}
}