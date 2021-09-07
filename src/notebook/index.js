import './notebook/style/main.css';

import Screen from "./Screen.js";

const screen = new Screen(true);

document.body.appendChild(screen.element);
