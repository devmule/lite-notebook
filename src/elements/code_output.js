function code_output() {

	let el = document.createElement('div');
	el.classList.add('code-output');

	let btns_container = document.createElement('div');
	btns_container.classList.add('code-btn-container');
	el.appendChild(btns_container);

	let btn_run = document.createElement('div');
	btn_run.classList.add('code-btn', 'code-btn-play');
	btns_container.appendChild(btn_run);

	let btn_clear = document.createElement('div');
	btn_clear.classList.add('code-btn', 'code-btn-clear');
	btns_container.appendChild(btn_clear);

	let output = document.createElement('div');
	output.classList.add('code-output-text');
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
				el.py_worker = lite_notebook.pyWorker;
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
						btn_run.classList.remove('code-btn-stop');
						btn_run.classList.add('code-btn-play');
					},
					(m) => {
						output.innerText += m.replace(/\\n/g, "<br>") + "\n";
						output.scrollTop = output.scrollHeight;
						el.py_worker.terminate();
						el.py_worker = null;
						btn_run.classList.remove('code-btn-stop');
						btn_run.classList.add('code-btn-play');
					});
				btn_run.classList.remove('code-btn-play');
				btn_run.classList.add('code-btn-stop');
				output.innerText += "run...\n";
				output.scrollTop = output.scrollHeight;
			} else {
				output.innerText += "process finished by user" + "\n";
				output.scrollTop = output.scrollHeight;
				el.py_worker.terminate();
				el.py_worker = null;
				btn_run.classList.remove('code-btn-stop');
				btn_run.classList.add('code-btn-play');
			}
		});
		el.addEventListener('onClear', () => output.innerText = "");
	};


	// ===================================
	return el;
}

export default code_output;

