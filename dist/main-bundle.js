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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/index.js");
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

/***/ "./src/main/index.js":
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ENUMS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ENUMS.js */ \"./src/ENUMS.js\");\n// ================================================================================================================== //\r\n//\r\n//                                      made by devmule https://github.com/devmule\r\n//                                                      29.05.2021\r\n//\r\n// ================================================================================================================== //\r\n\r\n\r\nwindow.main = {\r\n\troot: \"\",\r\n\t\r\n\tframe_src: \"frame.html\",\r\n\tframe_id: \"render-frame\",\r\n\tframe: null,\r\n\t\r\n\tnotebook_filename: \"notebook\",\r\n\thierarchy: {},\r\n\t\r\n\tloader: null,\r\n\tloader_id: \"loader\",\r\n\t\r\n\ton_loaded: () => initiate_application('./notebooks/hierarchy.json'), // todo refactor\r\n};\r\n\r\n\r\nasync function initiate_application(src) {\r\n\tlet hierarchy_file = await fetch(src);\r\n\tlet hierarchy_text = await hierarchy_file.text();\r\n\t\r\n\tif (hierarchy_text) {\r\n\t\tmain.hierarchy = JSON.parse(hierarchy_text);\r\n\t\t\r\n\t\tlet url = new URL(window.location.href);\r\n\t\tlet root = url.searchParams.get('page') || \"notebooks\";\r\n\t\t\r\n\t\tmain.frame = document.getElementById(main.frame_id);\r\n\t\tmain.loader = document.getElementById(main.loader_id);\r\n\t\t\r\n\t\tawait load_menu();\r\n\t\tawait call_render(root);\r\n\t\t\r\n\t} else {\r\n\t\tthrow new Error('Error. no hierarchy file!');\r\n\t}\r\n}\r\n\r\nasync function get_hierarchy_node(root) {\r\n\tlet path = root.split('/');\r\n\tlet node = main.hierarchy; // корень иерархии\r\n\tlet real_path = [node.src];\r\n\tlet depth = 0;\r\n\t\r\n\twhile (node.src === path[depth]) {\r\n\t\tdepth++;\r\n\t\tif (depth < path.length) {\r\n\t\t\tlet src = path[depth];\r\n\t\t\tlet child = node.children.find(c => c.src === src);\r\n\t\t\tif (child) {\r\n\t\t\t\tnode = child;\r\n\t\t\t\treal_path.push(node.src)\r\n\t\t\t} else break;\r\n\t\t} else break;\r\n\t}\r\n\t\r\n\treturn {node, root: real_path.join('/')};\r\n}\r\n\r\nasync function load_menu() {\r\n\tlet menu = document.getElementById(\"menu\");\r\n\tmenu.innerHTML = \"\";\r\n\t\r\n\tlet draw_hi = (node, depth, path) => {\r\n\t\tlet el = document.createElement(\"p\");\r\n\t\tel.style.paddingLeft = `${12 * depth}px`\r\n\t\tel.innerText = node.name;\r\n\t\tel.classList.add(\"menu-elem\");\r\n\t\tmenu.appendChild(el);\r\n\t\t\r\n\t\tlet root = path + node.src;\r\n\t\tel.setAttribute(\"path\", root); // сохраняется для выделения\r\n\t\tel.onclick = async () => await call_render(root);\r\n\t\tfor (let i = 0; i < node.children.length; i++) draw_hi(node.children[i], depth + 1, root + \"/\");\r\n\t}\r\n\t\r\n\tdraw_hi(main.hierarchy, 1, \"\");\r\n}\r\n\r\nlet IS_WAITING_RENDER = false;\r\n\r\nasync function call_render(path) {\r\n\tif (!IS_WAITING_RENDER) {\r\n\t\tIS_WAITING_RENDER = true;\r\n\t\tmain.loader.style.visibility = 'visible';\r\n\t\t\r\n\t\tmain.root = window.location.href.split('?')[0];\r\n\t\t\r\n\t\tlet {node, root} = await get_hierarchy_node(path);\r\n\t\t\r\n\t\tlet file = await fetch(`${main.root}/${root}/${main.notebook_filename}`);\r\n\t\tlet text = await file.text(); // todo file.json(); ???\r\n\t\t\r\n\t\t// show state in history\r\n\t\twindow.history.pushState({}, node.name, `${main.root}?page=${root}`);\r\n\t\tdocument.title = node.name;\r\n\t\t\r\n\t\t// reload iframe\r\n\t\tawait waitFrameReload(main.frame);\r\n\t\t// do render\r\n\t\t// todo wait until render ending\r\n\t\tlet data = {type: _ENUMS_js__WEBPACK_IMPORTED_MODULE_0__[\"MD_EVENTS\"].RENDER, text: text, root: root}\r\n\t\tmain.frame.contentWindow.postMessage(JSON.stringify(data), window.location.href);\r\n\t\t\r\n\t\t// activate buttons\r\n\t\tlet menu_elements = document.getElementById(\"menu\").getElementsByClassName(\"menu-elem\");\r\n\t\tfor (let i = 0; i < menu_elements.length; i++) {\r\n\t\t\tlet el = menu_elements[i];\r\n\t\t\tif (el.getAttribute(\"path\") === path) el.classList.add(\"active\");\r\n\t\t\telse el.classList.remove(\"active\");\r\n\t\t}\r\n\t\t\r\n\t\tIS_WAITING_RENDER = false;\r\n\t\tmain.loader.style.visibility = 'hidden';\r\n\t}\r\n}\r\n\r\nasync function waitFrameReload(iFrame) {\r\n\treturn new Promise((res, rej) => {\r\n\t\ttry {\r\n\t\t\tiFrame.contentWindow.location.reload();\r\n\t\t\tiFrame.onload = () => res();\r\n\t\t} catch (e) {\r\n\t\t\trej();\r\n\t\t}\r\n\t});\r\n}\n\n//# sourceURL=webpack:///./src/main/index.js?");

/***/ })

/******/ });