import './style/main.css';
import NotebookScreen from "./screen.js";
import {loadJson, loadPlugins} from "../utils/files";

const url = new URL(window.location.href)
const isEditor = url.searchParams.get('isEditor') === '1';
const senderName = url.searchParams.get('senderName');

const LTN = {
	
	/** элементы для рендера экранов */
	chunks: []
	
};

global.LTN = LTN;


((async () => {
	
	const config = await loadJson("../config.json");
	await loadPlugins(config.plugins);
	
	const screen = new NotebookScreen(isEditor, senderName, LTN.chunks);
	
	document.body.appendChild(screen.element);
	
})());

