import LTNChunkCSS from "../notebook/chunks/LTNChunkCSS.js";
import LTNChunkExecJS from "../notebook/chunks/LTNChunkExecJS.js";
import LTNChunkLibJS from "../notebook/chunks/LTNChunkLibJS.js";
import LTNChunkText from "./chunks/LTNChunkText/LTNChunkText.js";

/**
 * Данный словарь определяет имена/идентификаторы для обработчиков.
 * Этим именем будет определяться тип данных {@link NotebookChunkData}.
 * @type {Object<string, typeof LTNChunk>}
 * */
const chunks = {
	CSS: LTNChunkCSS,
	JS: LTNChunkExecJS,
	JSLib: LTNChunkLibJS,
	TEXT: LTNChunkText
};

export default chunks;
