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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html, body, .full-fill {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    border: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\niframe {\\r\\n    position: absolute;\\r\\n    overflow-y: scroll;\\r\\n}\\r\\n\\r\\n\\r\\n/*  ===== LOADER ANIMATION =====  */\\r\\n.loader-back {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    border: 0;\\r\\n    position: absolute;\\r\\n    visibility: visible;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    opacity: 1;\\r\\n    background: rgba(0, 0, 0, 0.1);\\r\\n    backdrop-filter: blur(2px);\\r\\n    transition: opacity 0.2s;\\r\\n}\\r\\n\\r\\n.loader-hidden {\\r\\n    opacity: 0;\\r\\n    pointer-events: none;\\r\\n}\\r\\n\\r\\n.loader {\\r\\n    display: inline-block;\\r\\n    position: relative;\\r\\n    width: 80px;\\r\\n    height: 80px;\\r\\n    left: calc(50% - 40px);\\r\\n    top: calc(50% - 40px);\\r\\n}\\r\\n\\r\\n.loader div {\\r\\n    box-sizing: border-box;\\r\\n    display: block;\\r\\n    position: absolute;\\r\\n    width: 64px;\\r\\n    height: 64px;\\r\\n    margin: 8px;\\r\\n    border: 8px solid #fff;\\r\\n    border-radius: 50%;\\r\\n    animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\\r\\n    border-color: #fff transparent transparent transparent;\\r\\n}\\r\\n\\r\\n.loader div:nth-child(1) {\\r\\n    animation-delay: -0.45s;\\r\\n}\\r\\n\\r\\n.loader div:nth-child(2) {\\r\\n    animation-delay: -0.3s;\\r\\n}\\r\\n\\r\\n.loader div:nth-child(3) {\\r\\n    animation-delay: -0.15s;\\r\\n}\\r\\n\\r\\n@keyframes loader {\\r\\n    0% {\\r\\n        transform: rotate(0deg);\\r\\n    }\\r\\n    100% {\\r\\n        transform: rotate(360deg);\\r\\n    }\\r\\n}\\r\\n\\r\\n/*  ===== LOADER ANIMATION =====  */\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/main.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/main.css?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _notebook_Notebook_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notebook/Notebook.js */ \"./src/notebook/Notebook.js\");\n/* harmony import */ var _screen_LNBScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screen/LNBScreen.js */ \"./src/screen/LNBScreen.js\");\n\r\n\r\n\r\n\r\nlet globalScreen = document.getElementById('screen');\r\n\r\nlet screen = new _screen_LNBScreen_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nglobalScreen.appendChild(screen.screen);\r\nscreen.loading = true;\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/notebook/Chunk.js":
/*!*******************************!*\
  !*** ./src/notebook/Chunk.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Chunk {\r\n\tconstructor() {\r\n\t\tthis.name = '';\r\n\t\tthis.content = '';\r\n\t}\r\n\t\r\n\traw() {\r\n\t\tlet data = {};\r\n\t\t\r\n\t\tdata.type = this.constructor.name;\r\n\t\tdata.name = this.name;\r\n\t\tdata.content = this.content;\r\n\t\t\r\n\t\treturn data;\r\n\t}\r\n\t\r\n\tinit(data) {\r\n\t\tthis.name = data.name;\r\n\t\tthis.content = data.content;\r\n\t}\r\n\t\r\n\tasync render(notebook) {\r\n\t}\r\n}\r\n\r\nclass ChunkCSS extends Chunk {\r\n\tasync render(notebook) {\r\n\t\t// todo fix\r\n\t\tlet styleTag = document.createElement('style');\r\n\t\tstyleTag.appendChild(document.createTextNode(this.content));\r\n\t\tnotebook.screen.appendChild(styleTag);\r\n\t}\r\n}\r\n\r\nclass ChunkLib extends Chunk {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t}\r\n\t\r\n\tasync loadLib(url) {\r\n\t\treturn new Promise((resolve, reject) => {\r\n\t\t\tlet scriptTag = document.createElement('script');\r\n\t\t\tdocument.head.appendChild(scriptTag);\r\n\t\t\t\r\n\t\t\tscriptTag.src = url;\r\n\t\t\tscriptTag.async = false;\r\n\t\t\tscriptTag.onload = resolve;\r\n\t\t\tscriptTag.onerror = reject;\r\n\t\t});\r\n\t}\r\n\t\r\n\tasync render(notebook) {\r\n\t\tlet lines = this.content.split(\"\\n\");\r\n\t\tfor (let i = 0; i < lines.length; i++) {\r\n\t\t\tlet line = lines[i].trim();\r\n\t\t\tif (line) {\r\n\t\t\t\t\r\n\t\t\t\tlet index = line.indexOf(\":\");\r\n\t\t\t\tif (index < 0) continue;\r\n\t\t\t\t\r\n\t\t\t\tlet type = line.slice(0, index).trim(),\r\n\t\t\t\t\tsrc = line.slice(index + 1, line.length).trim();\r\n\t\t\t\t\r\n\t\t\t\tif (type && src) await this.loadLib(src);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\nclass ChunkJavaScript extends Chunk {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.async = false;\r\n\t}\r\n\t\r\n\tasync raw() {\r\n\t\tlet data = await super.raw();\r\n\t\tdata.async = this.async;\r\n\t\t\r\n\t\treturn data;\r\n\t}\r\n\t\r\n\tasync init(data) {\r\n\t\tawait super.init(data);\r\n\t\tthis.async = data.async;\r\n\t}\r\n\t\r\n\tasync render(notebook) {\r\n\t\tif (this.async) await eval(this.content);\r\n\t\telse eval(this.content);\r\n\t}\r\n}\r\n\r\nclass ChunkMarkDown extends Chunk {\r\n\t\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tif (!ChunkMarkDown.init) {\r\n\t\t\tChunkMarkDown.init = true;\r\n\t\t\tChunkMarkDown.TAG_NAME = \"user-markdown\";\r\n\t\t\tChunkMarkDown.renderer = null;\r\n\t\t}\r\n\t}\r\n\t\r\n\tasync render(notebook) {\r\n\t\t\r\n\t\tif (!ChunkMarkDown.renderer) { // init renderer\r\n\t\t\tChunkMarkDown.renderer = new marked.Renderer();\r\n\t\t\t\r\n\t\t\tconst originalRendererLink = ChunkMarkDown.renderer.link.bind(ChunkMarkDown.renderer);\r\n\t\t\tconst originalRendererImage = ChunkMarkDown.renderer.image.bind(ChunkMarkDown.renderer);\r\n\t\t\t\r\n\t\t\t// todo local files from notebook files\r\n\t\t\t\r\n\t\t\tChunkMarkDown.renderer.link = (href, title, text) => {\r\n\t\t\t\tif (!href.startsWith('http')) href = (() => lite_notebook.root)() + '/' + href;\r\n\t\t\t\tlet link = originalRendererLink(href, title, text);\r\n\t\t\t\tlink = link.replace(\"<a\", \"<a target='_blank'\");\r\n\t\t\t\treturn link;\r\n\t\t\t};\r\n\t\t\t\r\n\t\t\tChunkMarkDown.renderer.image = (href, title, text) => {\r\n\t\t\t\tif (!href.startsWith('http')) href = (() => lite_notebook.root)() + '/' + href;\r\n\t\t\t\treturn originalRendererImage(href, title, text);\r\n\t\t\t};\r\n\t\t}\r\n\t\t\r\n\t\tlet el = document.createElement(\"div\");\r\n\t\tel.innerHTML = marked(this.content, {renderer: ChunkMarkDown.renderer});\r\n\t\tif (el.classList) el.classList.add(ChunkMarkDown.TAG_NAME);\r\n\t\t\r\n\t\tnotebook.screen.appendChild(el);\r\n\t}\r\n}\r\n\r\nclass ChunkMeta extends Chunk {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\t\r\n\t\tthis.author = '';\r\n\t\tthis.files = [];\r\n\t}\r\n\t\r\n\tfileToRaw(file) {\r\n\t\treturn new Promise((resolve, reject) => {\r\n\t\t\tlet reader = new FileReader();\r\n\t\t\treader.onload = () => resolve({\r\n\t\t\t\tdata: reader.result, name: file.name,\r\n\t\t\t\toptions: {type: file.type, lastModified: file.lastModified}\r\n\t\t\t});\r\n\t\t\treader.onerror = reject;\r\n\t\t\treader.readAsBinaryString(file);\r\n\t\t});\r\n\t}\r\n\t\r\n\trawToFile(raw) {\r\n\t\tlet array = new Uint8Array(raw.data.length);\r\n\t\tfor (let i = 0; i < raw.data.length; i++) array[i] = raw.data.charCodeAt(i);\r\n\t\treturn new File([array], raw.name, raw.options);\r\n\t}\r\n\t\r\n\tasync raw() {\r\n\t\tlet data = await super.raw();\r\n\t\tdata.author = this.author;\r\n\t\t\r\n\t\tdata.files = [];\r\n\t\tfor (let i = 0; i < this.files.length; i++)\r\n\t\t\tdata.files.push(await this.fileToRaw(this.files[i]));\r\n\t\t\r\n\t\treturn data;\r\n\t}\r\n\t\r\n\tasync init(data) {\r\n\t\tawait super.init(data);\r\n\t\tthis.author = data.author;\r\n\t\t\r\n\t\tthis.files = [];\r\n\t\tfor (let i = 0; i < data.files.length; i++)\r\n\t\t\tthis.files.push(await this.rawToFile(data.files[i]));\r\n\t}\r\n\t\r\n\tasync render(notebook) {\r\n\t}\r\n\t\r\n\taddFiles(files) {\r\n\t}\r\n}\r\n\r\nconst chunks = {Chunk, ChunkCSS, ChunkLib, ChunkJavaScript, ChunkMarkDown, ChunkMeta};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunks);\r\n\n\n//# sourceURL=webpack:///./src/notebook/Chunk.js?");

/***/ }),

/***/ "./src/notebook/Notebook.js":
/*!**********************************!*\
  !*** ./src/notebook/Notebook.js ***!
  \**********************************/
/*! exports provided: Notebook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Notebook\", function() { return Notebook; });\n/* harmony import */ var _Chunk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chunk.js */ \"./src/notebook/Chunk.js\");\n\r\n\r\nclass Notebook {\r\n\tconstructor() {\r\n\t\tthis.chunks /*[Chunk]*/ = [];\r\n\t\tthis.screen = null;\r\n\t}\r\n\t\r\n\tasync render() {\r\n\t\tfor (let i = 0; i < this.chunks.length; i++) {\r\n\t\t\tlet /*Chunk*/ ch = this.chunks[i];\r\n\t\t\tawait ch.render(this);\r\n\t\t}\r\n\t}\r\n\t\r\n\tasync raw() {\r\n\t\tlet data = {};\r\n\t\tdata.chunks = [];\r\n\t\tfor (let i = 0; i < this.chunks.length; i++) {\r\n\t\t\tlet /*Chunk*/ ch = this.chunks[i];\r\n\t\t\tdata.chunks.push(await ch.raw());\r\n\t\t}\r\n\t\treturn data;\r\n\t}\r\n\t\r\n\tasync init(data) {\r\n\t\tthis.chunks = [];\r\n\t\tfor (let i = 0; i < data.chunks.length; i++) {\r\n\t\t\tlet rawChunk = data.chunks[i];\r\n\t\t\tlet c = _Chunk_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][rawChunk.type];\r\n\t\t\tif (c) {\r\n\t\t\t\tlet ch = new c();\r\n\t\t\t\tawait ch.init(rawChunk);\r\n\t\t\t\tthis.chunks.push(ch);\r\n\t\t\t} else {\r\n\t\t\t\tthrow new TypeError(`Unknown type \\\"${rawChunk.type}\\\"`)\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/notebook/Notebook.js?");

/***/ }),

/***/ "./src/screen/LNBScreen.js":
/*!*********************************!*\
  !*** ./src/screen/LNBScreen.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LNBScreen; });\nclass LNBScreen {\r\n\tconstructor() {\r\n\t\t\r\n\t\t// основной элемент\r\n\t\tthis.screen = document.createElement(\"div\");\r\n\t\tthis.screen.classList.add(\"full-fill\");\r\n\t\t\r\n\t\tthis.cont = document.createElement(\"div\");\r\n\t\tthis.cont.style.position = \"absolute\";\r\n\t\tthis.cont.classList.add(\"full-fill\");\r\n\t\tthis.screen.appendChild(this.cont);\r\n\t\t\r\n\t\tthis.loader = document.createElement(\"div\");\r\n\t\tthis.loader.classList.add(\"loader-back\");\r\n\t\tthis.loader.innerHTML = `<div class=\"loader\"><div></div><div></div><div></div><div></div></div>`;\r\n\t\tthis.screen.appendChild(this.loader);\r\n\t}\r\n\t\r\n\tget loading() {\r\n\t\treturn !this.loader.classList.contains(\"loader-hidden\");\r\n\t}\r\n\t\r\n\tset loading(val) {\r\n\t\tif (val) this.loader.classList.remove(\"loader-hidden\");\r\n\t\telse this.loader.classList.add(\"loader-hidden\");\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/screen/LNBScreen.js?");

/***/ })

/******/ });