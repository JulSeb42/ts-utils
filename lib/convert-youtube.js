"use strict";

/*=============================================== Convert Youtube link to `http://youtube.url/embed/123` ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertYoutube = void 0;
function convertYoutube(str) {
  return str.replace("watch?v=", "embed/");
}
exports.convertYoutube = convertYoutube;