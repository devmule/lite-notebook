import './notebook/style/main.css';

import Screen from "./notebook/screen.js";

const screen = new Screen(true);

document.body.appendChild(screen.element);

let save_btn = document.getElementById('save_btn')
save_btn.addEventListener('click', async () => {
	let saved = await screen.notebook.save();
	console.log(saved);
});
