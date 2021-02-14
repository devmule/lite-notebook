const TAG_NAME = "user-markdown";

async function parse(ch, element) {
	let el = document.createElement("div");
	
	el.innerHTML = marked(ch.content);
	if (el.classList) el.classList.add(TAG_NAME);
	
	element.appendChild(el);
}

const md_parser = {
	types: ['md'],
	parse: parse,
};

export default md_parser;
