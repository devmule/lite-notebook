import {worker_api} from "./worker-api.js";
import {fetchCSS} from "../../utils/files.js";


let inited = false;
export default async function () {
	
	if (!inited) {
		inited = true;
		await fetchCSS("../plugins/PythonExecutor/styles/main.css");
		await import("../../libs/fontawesome.js");
	}
	
	let el = document.createElement('div');
	el.classList.add('python-executor-code-output');
	
	let btns_container = document.createElement('div');
	btns_container.classList.add('python-executor-code-btn-container');
	el.appendChild(btns_container);
	
	let btn_run = document.createElement('div');
	btn_run.classList.add('python-executor-code-btn');
	btns_container.appendChild(btn_run);
	btn_run.i = document.createElement('i');
	btn_run.i.classList.add('python-executor-btn-glyphicon', 'fas', 'fa-play');
	btn_run.appendChild(btn_run.i);
	
	let btn_clear = document.createElement('div');
	btn_clear.classList.add('python-executor-code-btn');
	btns_container.appendChild(btn_clear);
	btn_clear.i = document.createElement('i');
	btn_clear.i.classList.add('python-executor-btn-glyphicon', 'fas', 'fa-trash');
	btn_clear.appendChild(btn_clear.i);
	
	let output = document.createElement('div');
	output.classList.add('python-executor-code-output-text');
	el.appendChild(output);
	
	
	// ===================================
	btn_run.addEventListener('click', () => el.dispatchEvent(new Event('onPlay')));
	btn_clear.addEventListener('click', () => el.dispatchEvent(new Event('onClear')));
	
	el.py_worker = null;
	el.output = output;
	el.pre_codes = [];
	el.after_codes = [];
	el.before_launch = () => null;
	el.attachEditor = (editor) => {
		
		el.addEventListener('onPlay', () => {
			if (!el.py_worker) {
				el.py_worker = worker_api();
				if (el.before_launch instanceof Function) el.before_launch();
				
				el.py_worker.addEventListener("print", (m) => {
					let pieces = m.message;
					let text = pieces.join(" ");
					text = text.replace(/\\n/g, "<br>") + "\n";
					output.innerText += text;
					output.scrollTop = output.scrollHeight;
				});
				
				let code = [...el.pre_codes, editor.getValue(), ...el.after_codes].join("\n\n");
				
				el.py_worker.run(code,
					(m) => {
						output.innerText += "process finished" + "\n";
						output.scrollTop = output.scrollHeight;
						el.py_worker.terminate();
						el.py_worker = null;
						btn_run.i.classList.remove('fa-stop');
						btn_run.i.classList.add('fa-play');
					},
					(m) => {
						output.innerText += m.replace(/\\n/g, "<br>") + "\n";
						output.scrollTop = output.scrollHeight;
						el.py_worker.terminate();
						el.py_worker = null;
						btn_run.i.classList.remove('fa-stop');
						btn_run.i.classList.add('fa-play');
					});
				btn_run.i.classList.remove('fa-play');
				btn_run.i.classList.add('fa-stop');
				output.innerText += "run...\n";
				output.scrollTop = output.scrollHeight;
			} else {
				output.innerText += "process finished by user" + "\n";
				output.scrollTop = output.scrollHeight;
				el.py_worker.terminate();
				el.py_worker = null;
				btn_run.i.classList.remove('fa-stop');
				btn_run.i.classList.add('fa-play');
			}
		});
		el.addEventListener('onClear', () => output.innerText = "");
	};
	
	
	// ===================================
	return el;
	
}
