"use strict";

import {fetchCSS} from "../../utils/files.js";

let inited = false;


function sleep(s) {
	return new Promise((resolve) => setTimeout(resolve, s));
}

export default async function () {
	
	let term;
	
	if (!inited) {
		inited = true;
		await import("https://cdn.jsdelivr.net/npm/jquery");
		await import("https://cdn.jsdelivr.net/npm/jquery.terminal@2.23.0/js/jquery.terminal.min.js");
		await fetchCSS("https://cdn.jsdelivr.net/npm/jquery.terminal@2.23.0/css/jquery.terminal.min.css");
		await import("https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js");
	}
	
	let terminal = $('<div>python console</div>');
	let terminalElement = terminal[0];
	terminalElement.style.minHeight =
		terminalElement.style.maxHeight =
			terminalElement.style.height = "300px";
	
	(async () => {
		
		let pyodide = await loadPyodide({indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/"});
		
		let namespace = pyodide.globals.get("dict")();
		pyodide.runPython(`
            import sys
            from pyodide import to_js
            from pyodide.console import PyodideConsole, repr_shorten, BANNER
            import __main__
            BANNER = "Welcome to the Pyodide terminal emulator 🐍\\n" + BANNER
            pyconsole = PyodideConsole(__main__.__dict__)
            async def await_fut(fut):
              return to_js([await fut], depth=1)
            def clear_console():
              pyconsole.buffer = []
        `, namespace);
		let repr_shorten = namespace.get("repr_shorten");
		let banner = namespace.get("BANNER");
		let await_fut = namespace.get("await_fut");
		let pyconsole = namespace.get("pyconsole");
		let clear_console = namespace.get("clear_console");
		namespace.destroy();
		
		let ps1 = ">>> ", ps2 = "... ";
		
		async function lock() {
			let resolve;
			let ready = term.ready;
			term.ready = new Promise((res) => (resolve = res));
			await ready;
			return resolve;
		}
		
		async function interpreter(command) {
			let unlock = await lock();
			term.pause();
			// multiline should be splitted (useful when pasting)
			for (const c of command.split("\n")) {
				let fut = pyconsole.push(c);
				term.set_prompt(fut.syntax_check === "incomplete" ? ps2 : ps1);
				switch (fut.syntax_check) {
					case "syntax-error":
						term.error(fut.formatted_error.trimEnd());
						continue;
					case "incomplete":
						continue;
					case "complete":
						break;
					default:
						throw new Error(`Unexpected type ${fut.syntax_check}`);
				}
				// In Javascript, await automatically also awaits any results of
				// awaits, so if an async function returns a future, it will await
				// the inner future too. This is not what we want so we
				// temporarily put it into a list to protect it.
				let wrapped = await_fut(fut);
				// complete case, get result / error and print it.
				try {
					let [value] = await wrapped;
					if (value !== undefined) {
						term.echo(
							repr_shorten.callKwargs(value, {
								separator: "\n[[;orange;]<long output truncated>]\n",
							})
						);
					}
					if (pyodide.isPyProxy(value)) {
						value.destroy();
					}
				} catch (e) {
					if (e.constructor.name === "PythonError") {
						term.error(fut.formatted_error.trimEnd());
					} else {
						throw e;
					}
				} finally {
					fut.destroy();
					wrapped.destroy();
				}
			}
			term.resume();
			await sleep(10);
			unlock();
		}
		
		term = terminal.terminal(interpreter, {
			greetings: banner,
			prompt: ps1,
			completionEscape: false,
			completion: function (command, callback) {
				callback(pyconsole.complete(command).toJs()[0]);
			},
			keymap: {
				"CTRL+C": async function (event, original) {
					clear_console();
					term.echo_command();
					term.echo("KeyboardInterrupt");
					term.set_command("");
					term.set_prompt(ps1);
				},
			},
		});
		window.term = term;
		pyconsole.stdout_callback = (s) => term.echo(s, {newline: false});
		pyconsole.stderr_callback = (s) => term.error(s.trimEnd());
		
		term.ready = Promise.resolve();
		pyodide._module.on_fatal = async (e) => {
			term.error("Python has suffered a fatal error!");
			term.error("The cause of the fatal error was:");
			term.error(e);
			term.error("Look in the browser console for more details.");
			await term.ready;
			term.pause();
			await sleep(15);
			term.pause();
		};
		
	})().then();
	
	return terminalElement;
	
}
