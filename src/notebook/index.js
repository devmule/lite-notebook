import './style/main.css';
import NotebookScreen from "./screen.js";

const url = new URL(window.location.href)
const isEditor = url.searchParams.get('isEditor') === '1';
const senderName = url.searchParams.get('senderName');
const screen = new NotebookScreen(isEditor, senderName);

document.body.appendChild(screen.element);
