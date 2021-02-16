async function parse(ch, element) {
	
	let el = document.createElement("div");
	el.innerText = ch.content;
	
	for (let i = 0; i < ch.flags.length; i++) {
		let flag = ch.flags[i];
		
		if (flag.startsWith("id")) {
			let index = flag.indexOf("=");
			if (index < 0) continue;
			el.id = flag.slice(index + 1, flag.length).trim();
		}
	}
	
	element.appendChild(el);
	
	const editor = ace.edit("editor");
	editor.getSession().setMode("ace/mode/python");
	editor.setOptions({maxLines: 40});
}


const editor_parser = {
	types: ['editor', 'code', 'ace'],
	parse: parse,
};

export default editor_parser;
