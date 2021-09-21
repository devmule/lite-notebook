import LTNChunkCSS from "./chunks/LTNChunkCSS.js";
import LTNChunkExecJS from "./chunks/LTNChunkExecJS.js";
import LTNChunkLibJS from "./chunks/LTNChunkLibJS.js";
import LTNChunkText from "./chunks/LTNChunkText.js";
import LTNChunkHTML from "./chunks/LTNChunkHTML";

/**
 * Данный словарь определяет имена/идентификаторы для обработчиков.
 * Этим именем будет определяться тип данных {@link NotebookChunkData}.
 * @type {Object<string, typeof LTNChunk>}
 * */
const chunks = {
	CSS: LTNChunkCSS,
	HTML: LTNChunkHTML,
	JS: LTNChunkExecJS,
	JSLib: LTNChunkLibJS,
	TEXT: LTNChunkText
};

export default chunks;
