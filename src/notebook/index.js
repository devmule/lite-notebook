import './style/main.css';
import NotebookScreen from "./screen.js";
import {loadJson, loadPlugins} from "../utils/files";
import EnumsMsg from "../utils/EnumsMsg";

const url = new URL(window.location.href)
const isEditor = url.searchParams.get('isEditor') === '1';
const senderName = url.searchParams.get('senderName');

const LTN = {
	
	/** элементы для рендера экранов */
	chunks: [],
	
	/** @type {NotebookScreen} */
	screen: null,
	
};

global.LTN = LTN;


((async () => {
	
	const config = await loadJson("../config.json");
	await loadPlugins(config.plugins);
	
	LTN.screen = new NotebookScreen(isEditor, senderName, LTN.chunks);
	
	document.body.appendChild(LTN.screen.element);
	
	LTN.screen.send(EnumsMsg.NOTEBOOK_IS_READY, "");
	
})());

