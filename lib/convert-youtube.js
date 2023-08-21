"use strict";

/*=============================================== Convert Youtube link ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertYoutube = void 0;
/**
 * @description Converts a YouTube string to an embed URL
 * @example convertYoutube("https://www.youtube.com/watch?v=C9k0_rNyK-E") => https://www.youtube.com/embed/C9k0_rNyK-E
 */
function convertYoutube(str) {
  return str.replace("watch?v=", "embed/");
}
exports.convertYoutube = convertYoutube;