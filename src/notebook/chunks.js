import LTNChunkCSS from "../notebook/chunks/LTNChunkCSS.js";
import LTNChunkExecJS from "../notebook/chunks/LTNChunkExecJS.js";
import LTNChunkLibJS from "../notebook/chunks/LTNChunkLibJS.js";
import LTNChunkMarkdown from "./chunks/LTNChunkMarkdown/LTNChunkMarkdown.js";

/**
 * Данный словарь определяет имена/идентификаторы для обработчиков.
 * Этим именем будет определяться тип данных {@link NotebookChunkData}.
 * @type {Object<string, typeof LTNChunk>}
 * */
const chunks = {
	CSS: LTNChunkCSS,
	JS: LTNChunkExecJS,
	JSLib: LTNChunkLibJS,
	MD: LTNChunkMarkdown
};

export default chunks;
