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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/application/style/buttons.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/application/style/buttons.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".button {\\r\\n    margin: var(--offset-default);\\r\\n\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/application/style/buttons.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/application/style/main.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/application/style/main.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_screen_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./screen.css */ \"./node_modules/css-loader/dist/cjs.js!./src/application/style/screen.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./sidebar.css */ \"./node_modules/css-loader/dist/cjs.js!./src/application/style/sidebar.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_buttons_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./buttons.css */ \"./node_modules/css-loader/dist/cjs.js!./src/application/style/buttons.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_utils_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./utils.css */ \"./node_modules/css-loader/dist/cjs.js!./src/application/style/utils.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./variables.css */ \"./node_modules/css-loader/dist/cjs.js!./src/application/style/variables.css\");\n// Imports\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_screen_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_buttons_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_utils_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html, body, .main-outer {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    width: 100vw;\\r\\n    height: 100vh;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/application/style/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/application/style/screen.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/application/style/screen.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".screen {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    position: absolute;\\r\\n    overflow: hidden;\\r\\n    left: calc(var(--offset-default) + var(--sidebar-toggle-button-size));\\r\\n    width: calc(100% - var(--offset-default) - var(--sidebar-toggle-button-size));\\r\\n    height: 100%;\\r\\n    transition: left 0.2s ease-in-out, width 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\n#screen-editor, #screen-report {\\r\\n    margin: var(--offset-default);\\r\\n    top: 0;\\r\\n    width: calc(var(--screen-notebook-width) - 2 * var(--offset-default));\\r\\n    height: calc(var(--screen-notebook-height) - 2 * var(--offset-default));\\r\\n    position: absolute;\\r\\n    transition: transform 0.5s;\\r\\n}\\r\\n\\r\\n/* ========================================================== */\\r\\n/*     приколы для показа    */\\r\\n.screen > #screen-editor {\\r\\n    left: 0;\\r\\n}\\r\\n\\r\\n.screen > #screen-report {\\r\\n    left: var(--screen-notebook-width);\\r\\n}\\r\\n\\r\\n.screen.report > #screen-editor {\\r\\n    left: calc(-1 * var(--screen-notebook-width));\\r\\n}\\r\\n\\r\\n.screen.report > #screen-report {\\r\\n    left: 0;\\r\\n}\\r\\n\\r\\n.main-outer.sidebar-on > .screen {\\r\\n    left: var(--sidebar-width);\\r\\n    width: calc(100% - var(--sidebar-width));\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/application/style/screen.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/application/style/sidebar.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/application/style/sidebar.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".ltn-sidebar {\\r\\n\\r\\n    left: calc(-1 * var(--sidebar-width));\\r\\n    top: 0;\\r\\n\\r\\n    width: var(--sidebar-width);\\r\\n    height: 100%;\\r\\n\\r\\n    overflow-y: visible;\\r\\n    overflow-x: visible;\\r\\n    position: absolute;\\r\\n    z-index: 100;\\r\\n\\r\\n    background-color: var(--sidebar-background-color);\\r\\n\\r\\n    transition: left 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\n.ltn-sidebar-button {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n\\r\\n    position: absolute;\\r\\n    cursor: pointer;\\r\\n\\r\\n    top: var(--offset-default);\\r\\n    right: calc(-1 * (var(--offset-default) + var(--sidebar-toggle-button-size)));\\r\\n\\r\\n    width: var(--sidebar-toggle-button-size);\\r\\n    height: var(--sidebar-toggle-button-size);\\r\\n\\r\\n    background-image: var(--svg-icon-burger);\\r\\n\\r\\n    background-position: center center;\\r\\n    background-repeat: no-repeat;\\r\\n    transition: opacity 0.1s linear, right 0.2s ease-in-out;\\r\\n    opacity: 0.25;\\r\\n}\\r\\n\\r\\n.ltn-sidebar-button:hover {\\r\\n    opacity: 0.75;\\r\\n}\\r\\n\\r\\n/* ================= */\\r\\n.main-outer.sidebar-on > .ltn-sidebar {\\r\\n    left: 0;\\r\\n}\\r\\n\\r\\n.main-outer.sidebar-on > .ltn-sidebar > .ltn-sidebar-button {\\r\\n    right: var(--offset-default);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/application/style/sidebar.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/application/style/utils.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/application/style/utils.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\\r\\n.full-fill {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    border: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/application/style/utils.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/application/style/variables.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/application/style/variables.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \":root {\\r\\n\\r\\n    /* размеры */\\r\\n    --screen-notebook-height: 100%;\\r\\n    --screen-notebook-width: 100%;\\r\\n    --offset-default: 14px;\\r\\n\\r\\n    --sidebar-toggle-button-size: 24px;\\r\\n\\r\\n    --sidebar-width: 240px;\\r\\n\\r\\n    /* цвета */\\r\\n    --sidebar-background-color: #f1f1f1; /* он должен быть непрозрачный ?? */\\r\\n\\r\\n\\r\\n    /* иконки */\\r\\n    --svg-icon-burger: url('data:image/svg+xml;utf8,<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"18\\\" height=\\\"18\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z\\\"/></svg>');\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/application/style/variables.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/application/index.js":
/*!**********************************!*\
  !*** ./src/application/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.css */ \"./src/application/style/main.css\");\n/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen */ \"./src/application/screen.js\");\n\r\n\r\n\r\nconst screen = new _screen__WEBPACK_IMPORTED_MODULE_1__[\"AppScreen\"]();\r\n\r\ndocument.body.appendChild(screen.element);\r\n\n\n//# sourceURL=webpack:///./src/application/index.js?");

/***/ }),

/***/ "./src/application/messenger.js":
/*!**************************************!*\
  !*** ./src/application/messenger.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppMessenger; });\n/* harmony import */ var _utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/EventEmitter */ \"./src/utils/EventEmitter.js\");\n\r\n\r\n/**\r\n * @typedef {Object} IMessage\r\n * @property {string} sender\r\n * @property {string} type\r\n * @property {number} [uid]\r\n * @property {any} data\r\n * */\r\n\r\nlet reqUID = 0;\r\n\r\n/**\r\n * @param {string} sender\r\n * @param {string} type\r\n * */\r\nlet typename = (sender, type) => sender + ':' + type;\r\n\r\nclass AppMessenger extends _utils_EventEmitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.senders = new Map();\r\n\t\tthis.requests = new Map();\r\n\t\twindow.addEventListener(\"message\", e => this.onMessage(e.data), false);\r\n\t}\r\n\t\r\n\t/**\r\n\t * @param {string} name\r\n\t * @param {HTMLIFrameElement} sender\r\n\t * */\r\n\taddSender(name, sender) {\r\n\t\tif (this.senders.has(name)) throw new Error(`Name \\\"${name}\\\" already exist!`);\r\n\t\tthis.senders.set(name, sender);\r\n\t}\r\n\t\r\n\t/**\r\n\t * @param {string} str\r\n\t * */\r\n\tonMessage(str) {\r\n\t\ttry {\r\n\t\t\t\r\n\t\t\t/** @type {IMessage} */\r\n\t\t\tlet msg = JSON.parse(str);\r\n\t\t\tlet sender = this.senders.get(msg.sender);\r\n\t\t\t\r\n\t\t\tif (!sender) {\r\n\t\t\t\tconsole.warn(`No such sender name \\\"${name}\\\"!`);\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\tif (msg.uid != null && this.requests.has(msg.uid)) {\r\n\t\t\t\tthis.requests.get(msg.uid)(msg.data);\r\n\t\t\t\tthis.requests.delete(msg.uid);\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\tthis.emit({\r\n\t\t\t\ttype: typename(msg.sender, msg.type),\r\n\t\t\t\tmsg: msg,\r\n\t\t\t});\r\n\t\t\t\r\n\t\t} catch (e) {\r\n\t\t\tconsole.warn(e);\r\n\t\t}\r\n\t}\r\n\t\r\n\t/**\r\n\t * @param {string} name\r\n\t * @param {string} type\r\n\t * @param {any} data\r\n\t * */\r\n\tsend(name, type, data) {\r\n\t\t\r\n\t\tif (!this.senders.has(name)) throw new Error(`Name \\\"${name}\\\" not exist!`);\r\n\t\tlet to = this.senders.get(name);\r\n\t\t\r\n\t\tto.contentWindow.postMessage(JSON.stringify({type, data}), window.location.href);\r\n\t\t\r\n\t}\r\n\t\r\n\t/**\r\n\t * @param {string} name\r\n\t * @param {string} type\r\n\t * @param {any} [data]\r\n\t * @return {Promise.<IMessage>}\r\n\t * */\r\n\trequest(name, type, data) {\r\n\t\t\r\n\t\tif (!this.senders.has(name)) throw new Error(`Name \\\"${name}\\\" not exist!`);\r\n\t\tlet to = this.senders.get(name);\r\n\t\t\r\n\t\treturn new Promise(resolve => {\r\n\t\t\tlet uid = reqUID++;\r\n\t\t\t\r\n\t\t\tto.contentWindow.postMessage(JSON.stringify({type, data, uid}), window.location.href);\r\n\t\t\tthis.requests.set(uid, resolve);\r\n\t\t\t\r\n\t\t});\r\n\t\t\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/application/messenger.js?");

/***/ }),

/***/ "./src/application/screen.html":
/*!*************************************!*\
  !*** ./src/application/screen.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"main-outer sidebar-on\\\">\\r\\n    <div class=\\\"ltn-sidebar\\\">\\r\\n        <div class=\\\"ltn-sidebar-button\\\" id=\\\"btn-sidebar-toggle\\\"></div>\\r\\n        <button id=\\\"go-render\\\">go render</button>\\r\\n        <button id=\\\"log-notebook-data\\\">log notebook data</button>\\r\\n    </div>\\r\\n    <div class=\\\"screen\\\">\\r\\n        <div id=\\\"screen-editor\\\">\\r\\n            <iframe id=\\\"screen-editor-frame\\\" class=\\\"full-fill\\\" src=\\\"#\\\"></iframe>\\r\\n        </div>\\r\\n        <div id=\\\"screen-report\\\">\\r\\n            <iframe id=\\\"screen-report-frame\\\" class=\\\"full-fill\\\" src=\\\"#\\\"></iframe>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\\r\\n\\r\\n\";\n\n//# sourceURL=webpack:///./src/application/screen.html?");

/***/ }),

/***/ "./src/application/screen.js":
/*!***********************************!*\
  !*** ./src/application/screen.js ***!
  \***********************************/
/*! exports provided: AppScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppScreen\", function() { return AppScreen; });\n/* harmony import */ var _screen_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen.html */ \"./src/application/screen.html\");\n/* harmony import */ var _screen_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_screen_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messenger */ \"./src/application/messenger.js\");\n/* harmony import */ var _utils_EnumsMsg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/EnumsMsg */ \"./src/utils/EnumsMsg.js\");\n\r\n\r\n\r\n\r\nclass AppScreen extends _messenger__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\t\r\n\t\t/** @type {HTMLDivElement} */\r\n\t\tthis.element = document.createElement('div');\r\n\t\tthis.element.innerHTML = _screen_html__WEBPACK_IMPORTED_MODULE_0___default.a;\r\n\t\t\r\n\t\t/** @private\r\n\t\t * @type {HTMLDivElement} */\r\n\t\tthis._screensContainer = this.element.querySelector('.screen');\r\n\t\t\r\n\t\t/** @private\r\n\t\t * @type {HTMLDivElement} */\r\n\t\tthis._buttonSidebarToggle = this.element.querySelector('#btn-sidebar-toggle');\r\n\t\tthis._buttonSidebarToggle.addEventListener('click', () => {\r\n\t\t\tlet outer = this.element.children[0]\r\n\t\t\tlet sidebar_on_class = 'sidebar-on';\r\n\t\t\tlet wasOpened = outer.classList.contains(sidebar_on_class);\r\n\t\t\tif (wasOpened) outer.classList.remove(sidebar_on_class);\r\n\t\t\telse outer.classList.add(sidebar_on_class);\r\n\t\t});\r\n\t\t\r\n\t\t/** @type {HTMLIFrameElement} */\r\n\t\tthis.editor = this.element.querySelector('#screen-editor-frame');\r\n\t\tthis.editor.src = './frame.html?isEditor=1&senderName=editor';\r\n\t\tthis.addSender('editor', this.editor);\r\n\t\t\r\n\t\t/** @type {HTMLIFrameElement} */\r\n\t\tthis.report = this.element.querySelector('#screen-report-frame');\r\n\t\tthis.report.src = './frame.html?isEditor=0&senderName=report';\r\n\t\tthis.addSender('report', this.report);\r\n\t\t\r\n\t\t\r\n\t\tlet go_render = this.element.querySelector('#go-render');\r\n\t\tgo_render.addEventListener('click', async () => {\r\n\t\t\tawait this.reloadReport();\r\n\t\t\tthis.showReportScreen();\r\n\t\t});\r\n\t\t\r\n\t\tlet log_data = this.element.querySelector('#log-notebook-data');\r\n\t\tlog_data.addEventListener('click', async () => {\r\n\t\t\tlet aNotebookData = await this.getNotebookFromScreen('editor');\r\n\t\t\tconsole.log(aNotebookData);\r\n\t\t\tthis.showEditorScreen();\r\n\t\t});\r\n\t}\r\n\t\r\n\tasync reloadReport() {\r\n\t\tlet aNotebookData = await this.getNotebookFromScreen('editor');\r\n\t\tawait this.initNotebookOnScreen('report', aNotebookData);\r\n\t}\r\n\t\r\n\t/**\r\n\t * @param {string} name\r\n\t * @return {Promise.<NotebookData>}\r\n\t * */\r\n\tasync getNotebookFromScreen(name) {\r\n\t\treturn /** @type {NotebookData} */ await this.request(name, _utils_EnumsMsg__WEBPACK_IMPORTED_MODULE_2__[\"default\"].GET_NOTEBOOK);\r\n\t}\r\n\t\r\n\t/**\r\n\t * @param {string} name\r\n\t * @param {NotebookData} aNotebookData\r\n\t * @return {Promise.<any>}\r\n\t * */\r\n\tasync initNotebookOnScreen(name, aNotebookData) {\r\n\t\t\r\n\t\tif (!this.senders.has(name)) throw new Error(`Name \\\"${name}\\\" not exist!`);\r\n\t\tlet notebookScreen = this.senders.get(name);\r\n\t\t\r\n\t\tawait new Promise(resolve => {\r\n\t\t\tnotebookScreen.contentWindow.location.reload();\r\n\t\t\tnotebookScreen.onload = resolve;\r\n\t\t});\r\n\t\t\r\n\t\tawait this.request(name, _utils_EnumsMsg__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INIT_NOTEBOOK, aNotebookData);\r\n\t}\r\n\t\r\n\tshowEditorScreen() {\r\n\t\tthis._screensContainer.classList.remove('report');\r\n\t}\r\n\t\r\n\tshowReportScreen() {\r\n\t\tthis._screensContainer.classList.add('report');\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/application/screen.js?");

/***/ }),

/***/ "./src/application/style/main.css":
/*!****************************************!*\
  !*** ./src/application/style/main.css ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/application/style/main.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/application/style/main.css?");

/***/ }),

/***/ "./src/utils/EnumsMsg.js":
/*!*******************************!*\
  !*** ./src/utils/EnumsMsg.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\t\r\n\tGET_NOTEBOOK: 'GET_NOTEBOOK',\r\n\tINIT_NOTEBOOK: 'INIT_NOTEBOOK',\r\n\t\r\n});\r\n\n\n//# sourceURL=webpack:///./src/utils/EnumsMsg.js?");

/***/ }),

/***/ "./src/utils/EventEmitter.js":
/*!***********************************!*\
  !*** ./src/utils/EventEmitter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventEmitter; });\n/**\r\n * @typedef {Object} ICustomEvent\r\n * @property {string} type\r\n * */\r\n\r\n/**\r\n * @typedef {function(event: ICustomEvent)} IEventHandler\r\n * */\r\n\r\n/**\r\n * @typedef {Object} IEventListener\r\n * @property {string} type\r\n * @property {boolean} once\r\n * @property {IEventHandler} handler\r\n * */\r\n\r\n\r\nclass EventEmitter {\r\n\t\r\n\tconstructor() {\r\n\t\t/** @type IEventListener[] */\r\n\t\tthis.eventListeners = [];\r\n\t}\r\n\t\r\n\t/**\r\n\t * @param {string} type\r\n\t * @param {IEventHandler} handler\r\n\t * */\r\n\ton(type, handler) {\r\n\t\tthis.eventListeners.push({type, handler, once: false});\r\n\t}\r\n\t\r\n\t/**\r\n\t * @param {string} type\r\n\t * @param {IEventHandler} handler\r\n\t * */\r\n\tonce(type, handler) {\r\n\t\tthis.eventListeners.push({type, handler, once: true});\r\n\t}\r\n\t\r\n\t/**\r\n\t * @param {string} type\r\n\t * @param {IEventHandler} handler\r\n\t * */\r\n\tremove(type, handler) {\r\n\t\t\r\n\t\tconst filtered = this.eventListeners.filter((eventListener) => {\r\n\t\t\treturn eventListener.type === type && (eventListener.handler === handler || handler == null);\r\n\t\t})\r\n\t\t\r\n\t\tfor (let i = 0; i < filtered.length; i++) {\r\n\t\t\tconst index = this.eventListeners.indexOf(filtered[i]);\r\n\t\t\tthis.eventListeners.splice(index, 1);\r\n\t\t}\r\n\t}\r\n\t\r\n\t/**\r\n\t * @param {ICustomEvent} event\r\n\t * */\r\n\temit(event) {\r\n\t\tfor (let i = 0; i < this.eventListeners.length; i++) {\r\n\t\t\t\r\n\t\t\tconst eventListener = this.eventListeners[i];\r\n\t\t\t\r\n\t\t\tif (eventListener.type === event.type) {\r\n\t\t\t\teventListener.handler.call(this, event);\r\n\t\t\t\tif (eventListener.once) {\r\n\t\t\t\t\tthis.eventListeners.splice(i, 1);\r\n\t\t\t\t\ti--;\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t\r\n\t/**\r\n\t * @param {string} type\r\n\t * @return boolean\r\n\t * */\r\n\thas(type) {\r\n\t\treturn !!this.eventListeners.find(el => el.type === type);\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/utils/EventEmitter.js?");

/***/ })

/******/ });