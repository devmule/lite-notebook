function clickElem(elem) {
	// Thx user1601638 on Stack Overflow (6/6/2018 - https://stackoverflow.com/questions/13405129/javascript-create-and-save-file )
	let eventMouse = document.createEvent("MouseEvents");
	eventMouse.initMouseEvent("click", true, false,
		window, 0, 0, 0, 0, 0,
		false, false, false, false, 0, null);
	elem.dispatchEvent(eventMouse)
}

export function readFiles() {
	return new Promise((resolve, reject) => {
		let readFile = (e) => {
			let files = e.target.files;
			if (!files.length) {
				reject();
				return;
			}
			resolve(files);
		};
		let fileInput = document.createElement("input");
		fileInput.type = 'file';
		fileInput.multiple = true;
		fileInput.style.display = 'none';
		fileInput.onchange = readFile;
		document.body.appendChild(fileInput);
		clickElem(fileInput);
	});
}
