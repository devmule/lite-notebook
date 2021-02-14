async function parse(ch, element) {
	if (ch.flags.indexOf("async") >= 0) {
		await eval(ch.content);
	} else {
		eval(ch.content);
	}
}


const js_parser = {
	types: ['js', 'javascript', 'java-script'],
	parse: parse,
};

export default js_parser;
