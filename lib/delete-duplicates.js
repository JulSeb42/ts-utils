"use strict";

/*=============================================== Delete duplicates values from array ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteDuplicates = void 0;
function deleteDuplicates(arr) {
  return arr.filter(function (v, i, a) {
    // @ts-ignore
    return a.findIndex(function (v2) {
      return JSON.stringify(v2) === JSON.stringify(v);
    }) === i;
  });
}
exports.deleteDuplicates = deleteDuplicates;