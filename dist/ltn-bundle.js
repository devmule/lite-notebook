/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frame/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ENUMS.js":
/*!**********************!*\
  !*** ./src/ENUMS.js ***!
  \**********************/
/*! exports provided: MD_EVENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MD_EVENTS\", function() { return MD_EVENTS; });\nconst MD_EVENTS = {};\r\nMD_EVENTS.RENDER = \"RENDER\";\r\n\r\n\n\n//# sourceURL=webpack:///./src/ENUMS.js?");

/***/ }),

/***/ "./src/frame/elements/code_output.js":
/*!*******************************************!*\
  !*** ./src/frame/elements/code_output.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction code_output() {\r\n\r\n\tlet el = document.createElement('div');\r\n\tel.classList.add('code-output');\r\n\r\n\tlet btns_container = document.createElement('div');\r\n\tbtns_container.classList.add('code-btn-container');\r\n\tel.appendChild(btns_container);\r\n\r\n\tlet btn_run = document.createElement('div');\r\n\tbtn_run.classList.add('code-btn', 'code-btn-play');\r\n\tbtns_container.appendChild(btn_run);\r\n\r\n\tlet btn_clear = document.createElement('div');\r\n\tbtn_clear.classList.add('code-btn', 'code-btn-clear');\r\n\tbtns_container.appendChild(btn_clear);\r\n\r\n\tlet output = document.createElement('div');\r\n\toutput.classList.add('code-output-text');\r\n\tel.appendChild(output);\r\n\r\n\r\n\t// ===================================\r\n\tbtn_run.addEventListener('click', () => el.dispatchEvent(new Event('onPlay')));\r\n\tbtn_clear.addEventListener('click', () => el.dispatchEvent(new Event('onClear')));\r\n\r\n\tel.py_worker = null;\r\n\tel.output = output;\r\n    el.pre_codes = [];\r\n    el.after_codes = [];\r\n    el.before_launch = () => null;\r\n\tel.attachEditor = (editor) => {\r\n\r\n\t\tel.addEventListener('onPlay', () => {\r\n\t\t\tif (!el.py_worker) {\r\n\t\t\t\tel.py_worker = lite_notebook.pyWorker;\r\n\t\t\t    if (el.before_launch instanceof Function) el.before_launch();\r\n\r\n\t\t\t\tel.py_worker.addEventListener(\"print\", (m) => {\r\n\t\t\t\t\tlet pieces = m.message;\r\n\t\t\t\t\tlet text = pieces.join(\" \");\r\n\t\t\t\t\ttext = text.replace(/\\\\n/g, \"<br>\") + \"\\n\";\r\n\t\t\t\t\toutput.innerText += text;\r\n\t\t\t\t\toutput.scrollTop = output.scrollHeight;\r\n\t\t\t\t});\r\n\r\n\t\t\t\tlet code = [...el.pre_codes, editor.getValue(), ...el.after_codes].join(\"\\n\\n\");\r\n\r\n\t\t\t\tel.py_worker.run(code,\r\n\t\t\t\t\t(m) => {\r\n\t\t\t\t\t\toutput.innerText += \"process finished\" + \"\\n\";\r\n\t\t\t\t\t\toutput.scrollTop = output.scrollHeight;\r\n\t\t\t\t\t\tel.py_worker.terminate();\r\n\t\t\t\t\t\tel.py_worker = null;\r\n\t\t\t\t\t\tbtn_run.classList.remove('code-btn-stop');\r\n\t\t\t\t\t\tbtn_run.classList.add('code-btn-play');\r\n\t\t\t\t\t},\r\n\t\t\t\t\t(m) => {\r\n\t\t\t\t\t\toutput.innerText += m.replace(/\\\\n/g, \"<br>\") + \"\\n\";\r\n\t\t\t\t\t\toutput.scrollTop = output.scrollHeight;\r\n\t\t\t\t\t\tel.py_worker.terminate();\r\n\t\t\t\t\t\tel.py_worker = null;\r\n\t\t\t\t\t\tbtn_run.classList.remove('code-btn-stop');\r\n\t\t\t\t\t\tbtn_run.classList.add('code-btn-play');\r\n\t\t\t\t\t});\r\n\t\t\t\tbtn_run.classList.remove('code-btn-play');\r\n\t\t\t\tbtn_run.classList.add('code-btn-stop');\r\n\t\t\t\toutput.innerText += \"run...\\n\";\r\n\t\t\t\toutput.scrollTop = output.scrollHeight;\r\n\t\t\t} else {\r\n\t\t\t\toutput.innerText += \"process finished by user\" + \"\\n\";\r\n\t\t\t\toutput.scrollTop = output.scrollHeight;\r\n\t\t\t\tel.py_worker.terminate();\r\n\t\t\t\tel.py_worker = null;\r\n\t\t\t\tbtn_run.classList.remove('code-btn-stop');\r\n\t\t\t\tbtn_run.classList.add('code-btn-play');\r\n\t\t\t}\r\n\t\t});\r\n\t\tel.addEventListener('onClear', () => output.innerText = \"\");\r\n\t};\r\n\r\n\r\n\t// ===================================\r\n\treturn el;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (code_output);\r\n\r\n\n\n//# sourceURL=webpack:///./src/frame/elements/code_output.js?");

/***/ }),

/***/ "./src/frame/elements/index.js":
/*!*************************************!*\
  !*** ./src/frame/elements/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _code_output__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code_output */ \"./src/frame/elements/code_output.js\");\n\r\n\r\nconst elements = {\r\n\tcode_output: _code_output__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (elements);\r\n\n\n//# sourceURL=webpack:///./src/frame/elements/index.js?");

/***/ }),

/***/ "./src/frame/index.js":
/*!****************************!*\
  !*** ./src/frame/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/frame/render/index.js\");\n/* harmony import */ var _py_worker_worker_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./py_worker/worker_api.js */ \"./src/frame/py_worker/worker_api.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements */ \"./src/frame/elements/index.js\");\n/* harmony import */ var _ENUMS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ENUMS */ \"./src/ENUMS.js\");\n// ================================================================================================================== //\r\n//\r\n//                                      made by devmule https://github.com/devmule\r\n//                                                      14.02.2021\r\n//\r\n// ================================================================================================================== //\r\n\r\n// подключение либ\r\n\r\n// Ace - встроенный редактор кода\r\n// подключается со странички\r\n// const ace = require(\"brace\");\r\n// require(\"brace/mode/javascript\");\r\n// require(\"brace/mode/python\");\r\n// require(\"brace/theme/twilight\");\r\n\r\n// mathjax - рендер LaTeX математических формул\r\n// подключается со странички\r\n\r\n// pyodide - интерпретатор питона\r\n// подключается в воркере\r\n// require(\"pyodide\");\r\n\r\n\r\n// ================================================================================================================== //\r\n\r\n// renderMD - рендер разметки\r\n\r\n// worker_api - python обработчик, работающий через web worker\r\n\r\n\r\n\r\n\r\nconst lite_notebook = {\r\n\t// settings\r\n\tv: '0.1.0',\r\n\troot: \"\",\r\n\tscreen: null,\r\n\tworkerURL: \"dist/ltn-py-worker.js\",\r\n\t\r\n\t// DOM elements\r\n\telements: _elements__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n\t\r\n\t// worker\r\n\tget pyWorker() {\r\n\t\treturn Object(_py_worker_worker_api_js__WEBPACK_IMPORTED_MODULE_1__[\"worker_api\"])(lite_notebook.workerURL);\r\n\t}\r\n};\r\nwindow.lite_notebook = lite_notebook;\r\n\r\nasync function render_path(path) {\r\n\tlite_notebook.screen = document.getElementById(\"screen\");\r\n\tlite_notebook.screen.innerHTML = \"\";\r\n\t\r\n\tlet md = await fetch(path + \"/notebook\");\r\n\tlet text = await md.text();\r\n\t\r\n\tawait Object(_render__WEBPACK_IMPORTED_MODULE_0__[\"renderMD\"])(text, lite_notebook.screen);\r\n\t\r\n}\r\n\r\nwindow.addEventListener(\"message\", receiveMessage, false);\r\n\r\nasync function receiveMessage(e) {\r\n\tlet data = JSON.parse(e.data);\r\n\t\r\n\tswitch (data.type) {\r\n\t\tcase _ENUMS__WEBPACK_IMPORTED_MODULE_3__[\"MD_EVENTS\"].RENDER:\r\n\t\t\tlite_notebook.screen = document.getElementById(\"screen\");\r\n\t\t\tlite_notebook.screen.innerHTML = \"\";\r\n\t\t\tlite_notebook.root = data.root;\r\n\t\t\tawait Object(_render__WEBPACK_IMPORTED_MODULE_0__[\"renderMD\"])(data.text, lite_notebook.screen);\r\n\t\t\tawait MathJax.typesetPromise(); // todo use MathJax ver that dont needs to refresh ????\r\n\t\t\tbreak;\r\n\t\tdefault:\r\n\t\t\tthrow new Error(`Unknown message type \\\"${data.type}\\\"`);\r\n\t}\r\n\t\r\n\te.source.postMessage(JSON.stringify({uid: data.uid}), e.origin);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/frame/index.js?");

/***/ }),

/***/ "./src/frame/py_worker/worker_api.js":
/*!*******************************************!*\
  !*** ./src/frame/py_worker/worker_api.js ***!
  \*******************************************/
/*! exports provided: worker_api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"worker_api\", function() { return worker_api; });\nfunction worker_api(url) {\r\n\treturn {\r\n\t\tworker: new Worker(url),\r\n\t\tlisteners: [],\r\n\t\t\r\n\t\tcontext: {\r\n\t\t\tvariables: {\r\n\t\t\t\tlite_notebook: lite_notebook.v,\r\n\t\t\t},\r\n\t\t\tevents: ['print']\r\n\t\t},\r\n\t\t\r\n\t\taddVariable (name, value) {\r\n\t\t\tthis.context.variables[name] = value\r\n\t\t},\r\n\t\taddFunction (name) {\r\n\t\t\tthis.context.events.push(name)\r\n\t\t},\r\n\t\taddEventListener (type, listener) {\r\n\t\t\tthis.listeners.push({type, listener});\r\n\t\t},\r\n\r\n\t\trun (script, onSuccess, onError) {\r\n\t\t\tthis.worker.onerror = onError;\r\n\t\t\tthis.worker.onmessage = e => {\r\n\t\t\t\tconst {error} = e.data;\r\n\t\t\t\tfor (let i = 0; i < this.listeners.length; i++) {\r\n\t\t\t\t\tif (e.data.type === this.listeners[i].type)\r\n\t\t\t\t\t\ttry {\r\n\t\t\t\t\t\t\tthis.listeners[i].listener(e.data);\r\n\t\t\t\t\t\t} catch (err) {\r\n\t\t\t\t\t\t\tconsole.error(err.message)\r\n\t\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\tif (e.data.type === \"end\") onSuccess(e.data);\r\n\t\t\t\tif (error) onError(error);\r\n\t\t\t};\r\n\t\t\t\r\n\t\t\tthis.worker.postMessage({context: this.context, python: script});\r\n\t\t},\r\n\t\tterminate() {\r\n\t\t\tthis.worker.terminate();\r\n\t\t}\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/frame/py_worker/worker_api.js?");

/***/ }),

/***/ "./src/frame/render/chunks_parser.js":
/*!*******************************************!*\
  !*** ./src/frame/render/chunks_parser.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction parse_string(string) {\r\n\tlet lines = string.split('\\n');\r\n\t\r\n\tlet chunks = [];\r\n\tlet current_chunk = null;\r\n\tlet collected_lines = [];\r\n\t\r\n\tfor (let i = 0; i < lines.length; i++) {\r\n\t\t// читаем построчно\r\n\t\tlet line = lines[i];\r\n\t\t\r\n\t\tif (line.slice(0, 3) === '>>>') { // если линия инициализации чанка\r\n\t\t\t\r\n\t\t\tif (current_chunk) { // если в чанке что-то было\r\n\t\t\t\t// то чанк сохраняется с контентом\r\n\t\t\t\tcurrent_chunk.content = collected_lines.join('\\n')\r\n\t\t\t\tchunks.push(current_chunk);\r\n\t\t\t\t// линии обнуляются\r\n\t\t\t\tcollected_lines.length = 0;\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t// читаем линию инициализации\r\n\t\t\tline = line.trim();\r\n\t\t\tconst flags = line\r\n\t\t\t\t.slice(line.search(/[^>]/)) // начинается чтение строки после знаков \">\"\r\n\t\t\t\t.split(/[ \\t]+/) // строка разделяется по пустому пространству\r\n\t\t\t\t.filter(s => s !== ''); // остаются только непустые элементы\r\n\t\t\t\r\n\t\t\t// создаём новый чанк\r\n\t\t\tcurrent_chunk = {\r\n\t\t\t\tcontent: '',\r\n\t\t\t\ttype: flags[0],\r\n\t\t\t\tflags: flags.slice(1),\r\n\t\t\t};\r\n\t\t\t\r\n\t\t} else {\r\n\t\t\tcollected_lines.push(line);\r\n\t\t}\r\n\t}\r\n\t\r\n\tif (current_chunk) { // если в чанке что-то было\r\n\t\t// то чанк сохраняется с контентом\r\n\t\tcurrent_chunk.content = collected_lines.join('\\n')\r\n\t\tchunks.push(current_chunk);\r\n\t}\r\n\t\r\n\treturn chunks;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (parse_string);\r\n\n\n//# sourceURL=webpack:///./src/frame/render/chunks_parser.js?");

/***/ }),

/***/ "./src/frame/render/css.js":
/*!*********************************!*\
  !*** ./src/frame/render/css.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nasync function parse(ch, element) {\r\n\tlet styleTag = document.createElement('style');\r\n\tstyleTag.appendChild(document.createTextNode(ch.content));\r\n\telement.appendChild(styleTag);\r\n}\r\n\r\n\r\nconst css_parser = {\r\n\ttypes: ['css'],\r\n\tparse: parse,\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (css_parser);\r\n\n\n//# sourceURL=webpack:///./src/frame/render/css.js?");

/***/ }),

/***/ "./src/frame/render/editor.js":
/*!************************************!*\
  !*** ./src/frame/render/editor.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nasync function parse(ch, element) {\r\n\t\r\n\tlet el = document.createElement(\"div\");\r\n\tel.innerText = ch.content;\r\n\t\r\n\tlet editor_index = null;\r\n\t\r\n\tfor (let i = 0; i < ch.flags.length; i++) {\r\n\t\tlet flag = ch.flags[i];\r\n\t\t\r\n\t\tif (flag.startsWith(\"id\")) {\r\n\t\t\tlet index = flag.indexOf(\"=\");\r\n\t\t\tif (index < 0) continue;\r\n\t\t\teditor_index = el.id = flag.slice(index + 1, flag.length).trim();\r\n\t\t}\r\n\t}\r\n\t\r\n\telement.appendChild(el);\r\n\t\r\n\tconst editor = ace.edit(editor_index);\r\n\teditor.getSession().setMode(\"ace/mode/python\");\r\n\teditor.setOptions({maxLines: 60, minLines: 20});\r\n}\r\n\r\n\r\nconst editor_parser = {\r\n\ttypes: ['editor', 'code', 'ace'],\r\n\tparse: parse,\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (editor_parser);\r\n\n\n//# sourceURL=webpack:///./src/frame/render/editor.js?");

/***/ }),

/***/ "./src/frame/render/ftch.js":
/*!**********************************!*\
  !*** ./src/frame/render/ftch.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nasync function loadJS(url) {\r\n\t\r\n\treturn new Promise((resolve, reject) => {\r\n\t\t\r\n\t\tlet scriptTag = document.createElement('script');\r\n\t\tdocument.head.appendChild(scriptTag);\r\n\t\tscriptTag.src = url;\r\n\t\tscriptTag.async = false;\r\n\t\t\r\n\t\tscriptTag.onload = resolve;\r\n\t\tscriptTag.onerror = reject;\r\n\t});\r\n}\r\n\r\nasync function loadText(request) {\r\n\tlet index = request.indexOf(\"=\");\r\n\tif (index < 0) return;\r\n\t\r\n\tlet var_name = request.slice(0, index).trim(),\r\n\t\tsrc = request.slice(index + 1, request.length).trim();\r\n\t\r\n\tif (!src.startsWith('http')) src = lite_notebook.root + \"/\" + src;\r\n\t\r\n\tif (var_name && src) {\r\n\t\tlet md = await fetch(src);\r\n\t\tself[var_name] = await md.text();\r\n\t}\r\n}\r\n\r\nasync function parseLine(line) {\r\n\tlet index = line.indexOf(\":\");\r\n\tif (index < 0) return;\r\n\t\r\n\tlet type = line.slice(0, index).trim(),\r\n\t\tsrc = line.slice(index + 1, line.length).trim();\r\n\t\r\n\tif (type && src) {\r\n\t\t\r\n\t\tswitch (type) {\r\n\t\t\tcase \"js\":\r\n\t\t\t\tawait loadJS(src);\r\n\t\t\t\tbreak;\r\n\t\t\tcase \"text\":\r\n\t\t\t\tawait loadText(src);\r\n\t\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n}\r\n\r\nasync function parse(ch, element) {\r\n\tlet lines = ch.content.split(\"\\n\");\r\n\tfor (let i = 0; i < lines.length; i++) {\r\n\t\t\r\n\t\tlet line = lines[i].trim();\r\n\t\tif (line) await parseLine(line);\r\n\t}\r\n}\r\n\r\nconst fetch_parser = {\r\n\ttypes: ['fetch'],\r\n\tparse: parse,\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetch_parser);\r\n\n\n//# sourceURL=webpack:///./src/frame/render/ftch.js?");

/***/ }),

/***/ "./src/frame/render/index.js":
/*!***********************************!*\
  !*** ./src/frame/render/index.js ***!
  \***********************************/
/*! exports provided: renderMD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMD\", function() { return renderMD; });\n/* harmony import */ var _chunks_parser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunks_parser.js */ \"./src/frame/render/chunks_parser.js\");\n/* harmony import */ var _css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css.js */ \"./src/frame/render/css.js\");\n/* harmony import */ var _js_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js.js */ \"./src/frame/render/js.js\");\n/* harmony import */ var _ftch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ftch.js */ \"./src/frame/render/ftch.js\");\n/* harmony import */ var _md_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./md.js */ \"./src/frame/render/md.js\");\n/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.js */ \"./src/frame/render/editor.js\");\n// общий парсер - разделитель\r\n\r\n\r\n// разные парсеры\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst parsers = [\r\n\t_css_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n\t_js_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n\t_ftch_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n\t_md_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n\t_editor_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\r\n];\r\n\r\n\r\nasync function renderMD(md, element) {\r\n\tlet chunks = Object(_chunks_parser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(md);\r\n\t\r\n\tfor (let i = 0; i < chunks.length; i++) {\r\n\t\tlet ch = chunks[i];\r\n\t\tif (!ch.type) continue;\r\n\t\t\r\n\t\tlet type = ch.type.trim().toLowerCase();\r\n\t\t\r\n\t\tlet parser = parsers.find(p => p.types.indexOf(type) >= 0);\r\n\t\tif (parser) await parser.parse(ch, element);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/frame/render/index.js?");

/***/ }),

/***/ "./src/frame/render/js.js":
/*!********************************!*\
  !*** ./src/frame/render/js.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nasync function parse(ch, element) {\r\n\tif (ch.flags.indexOf(\"async\") >= 0) {\r\n\t\tawait eval(ch.content);\r\n\t} else {\r\n\t\teval(ch.content);\r\n\t}\r\n}\r\n\r\n\r\nconst js_parser = {\r\n\ttypes: ['js', 'javascript', 'java-script'],\r\n\tparse: parse,\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (js_parser);\r\n\n\n//# sourceURL=webpack:///./src/frame/render/js.js?");

/***/ }),

/***/ "./src/frame/render/md.js":
/*!********************************!*\
  !*** ./src/frame/render/md.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst TAG_NAME = \"user-markdown\";\r\n\r\nlet renderer = null;\r\n\r\nasync function parse(ch, element) {\r\n\r\n    if (!renderer) {\r\n        // init renderer\r\n        renderer = new marked.Renderer();\r\n\r\n        const originalRendererLink = renderer.link.bind(renderer);\r\n        const originalRendererImage = renderer.image.bind(renderer);\r\n\r\n        renderer.link = (href, title, text) => {\r\n            if (!href.startsWith('http')) href = (() => lite_notebook.root)() + '/' + href;\r\n            let link = originalRendererLink(href, title, text);\r\n            link = link.replace(\"<a\", \"<a target='_blank'\");\r\n            return link;\r\n        };\r\n\r\n        renderer.image = (href, title, text) => {\r\n            if (!href.startsWith('http')) href = (() => lite_notebook.root)() + '/' + href;\r\n            return originalRendererImage(href, title, text);\r\n        };\r\n    }\r\n\r\n\r\n    let el = document.createElement(\"div\");\r\n\r\n    el.innerHTML = marked(ch.content, {renderer});\r\n    if (el.classList) el.classList.add(TAG_NAME);\r\n\r\n    element.appendChild(el);\r\n}\r\n\r\nconst md_parser = {\r\n    types: ['md'],\r\n    parse: parse,\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (md_parser);\r\n\n\n//# sourceURL=webpack:///./src/frame/render/md.js?");

/***/ })

/******/ });