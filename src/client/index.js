import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'

import './style/main.css';
import {AppScreen} from "./screen";

const screen = new AppScreen();

document.body.appendChild(screen.element);
