function parse_string(string) {
	let lines = string.split('\n');
	
	let chunks = [];
	let current_chunk = null;
	let collected_lines = [];
	
	for (let i = 0; i < lines.length; i++) {
		// читаем построчно
		let line = lines[i];
		
		if (line.slice(0, 2) === '%%') { // если линия инициализации чанка
			
			if (current_chunk) { // если в чанке что-то было
				// то чанк сохраняется с контентом
				current_chunk.content = collected_lines.join('\n')
				chunks.push(current_chunk);
				// линии обнуляются
				collected_lines.length = 0;
			}
			
			// читаем линию инициализации
			line = line.trim();
			const flags = line
				.slice(line.search(/[^%]/)) // начинается чтение строки после знаков "%"
				.split(/[ \t]+/) // строка разделяется по пустому пространству
				.filter(s => s !== ''); // остаются только непустые элементы
			
			// создаём новый чанк
			current_chunk = {
				content: '',
				type: flags[0],
				flags: flags.slice(1),
			};
			
		} else {
			collected_lines.push(line);
		}
	}
	
	if (current_chunk) { // если в чанке что-то было
		// то чанк сохраняется с контентом
		current_chunk.content = collected_lines.join('\n')
		chunks.push(current_chunk);
	}
	
	return chunks;
}

export default parse_string;
