import LTNChunkCSS from "./LTNChunkCSS";
import LTNChunkExecJS from "./LTNChunkExecJS";
import LTNChunkText from "./LTNChunkText";
import LTNChunkHTML from "./LTNChunkHTML";

/**
 * Данный словарь определяет имена/идентификаторы для обработчиков.
 * Этим именем будет определяться тип данных {@link NotebookChunkData}.
 * @type {Object<string, typeof LTNChunk>}
 * */
export default {
	CSS: LTNChunkCSS,
	HTML: LTNChunkHTML,
	JS: LTNChunkExecJS,
	TEXT: LTNChunkText
};
