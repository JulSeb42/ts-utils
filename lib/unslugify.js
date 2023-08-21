"use strict";

/*=============================================== Unslugify ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unslugify = void 0;
/**
 * @description Unslugify a string
 * @example unslugify("hello_world-foo") => Hello world foo
 */
var to_sentence_case_1 = require("./to-sentence-case");
function unslugify(str) {
  return (0, to_sentence_case_1.toSentenceCase)(str.replace(/-/g, " ").replace(/_/g, " "));
}
exports.unslugify = unslugify;