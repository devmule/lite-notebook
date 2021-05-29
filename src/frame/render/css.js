async function parse(ch, element) {
	let styleTag = document.createElement('style');
	styleTag.appendChild(document.createTextNode(ch.content));
	element.appendChild(styleTag);
}


const css_parser = {
	types: ['css'],
	parse: parse,
};

export default css_parser;
