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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frame/py_worker/worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/frame/py_worker/worker.js":
/*!***************************************!*\
  !*** ./src/frame/py_worker/worker.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("importScripts('https://cdn.jsdelivr.net/pyodide/v0.16.1/full/pyodide.js');\r\n\r\nself.languagePluginUrl = 'https://cdn.jsdelivr.net/pyodide/v0.16.1/full/';\r\n\r\n// todo разделить события сообщения и чистить воркер чтобы\r\n//  не создавать по воркеру на каждый запуск\r\nself.onmessage = async (event) => {\r\n\t// дождаться загрузки питона и библиотек\r\n\tawait languagePluginLoader;\r\n\t\r\n\t\r\n\tconst {python, context} = event.data;\r\n\t\r\n\t// инициализировать переменные в питоне\r\n\tfor (const key of Object.keys(context.variables))\r\n\t\tself.pyodide.globals[key] = context.variables[key];\r\n\t\r\n\t// инициализировать функции в питоне\r\n\tfor (let i = 0; i < context.events.length; i++) {\r\n\t\tlet key = context.events[i];\r\n\t\tself.pyodide.globals[key] = (...message) =>\r\n\t\t\tself.postMessage({type: key, message: JSON.parse(JSON.stringify([...message]))});\r\n\t}\r\n\t\r\n\ttry {\r\n\t\tself.postMessage({type: \"end\", results: await self.pyodide.runPythonAsync(python)});\r\n\t} catch (error) {\r\n\t\tself.postMessage({error: error.message});\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack:///./src/frame/py_worker/worker.js?");

/***/ })

/******/ });