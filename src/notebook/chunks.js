import LTNChunkCSS from "../notebook/chunks/LTNChunkCSS.js";
import LTNChunkExecJS from "../notebook/chunks/LTNChunkExecJS.js";
import LTNChunkLibJS from "../notebook/chunks/LTNChunkLibJS.js";
import LTNChunkMarkdown from "../notebook/chunks/LTNChunkMarkdown.js";

/**
 * @type {Object<string, typeof LTNChunk>}
 * */
const chunks = {
	CSS: LTNChunkCSS,
	JS: LTNChunkExecJS,
	JSLib: LTNChunkLibJS,
	MD: LTNChunkMarkdown
};

export default chunks;
