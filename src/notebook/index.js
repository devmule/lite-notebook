import './style/main.css';
import Screen from "./screen.js";

const isEditor = new URL(window.location.href).searchParams.get('isEditor') === '1';
const screen = new Screen(isEditor);

document.body.appendChild(screen.element);
