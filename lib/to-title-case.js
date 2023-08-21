"use strict";

/*=============================================== Convert string To Title Case ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toTitleCase = void 0;
function toTitleCase(string) {
  var arr = string.toLowerCase().split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}
exports.toTitleCase = toTitleCase;