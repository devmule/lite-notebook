import './main.css';
import './notebook/Notebook.js';
import LNBScreen from "./screen/LNBScreen.js";

let globalScreen = document.getElementById('screen');

let screen = new LNBScreen();
globalScreen.appendChild(screen.screen);
screen.loading = true;
