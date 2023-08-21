"use strict";

/*=============================================== Delete duplicates ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteDuplicates = void 0;
/**
 * @description Delete duplicated values from array
 * @example deleteDuplicates([1, 1, 1, 2, 3]) => [1, 2, 3]
 */
function deleteDuplicates(arr) {
  return arr.filter(function (v, i, a) {
    // @ts-ignore
    return a.findIndex(function (v2) {
      return JSON.stringify(v2) === JSON.stringify(v);
    }) === i;
  });
}
exports.deleteDuplicates = deleteDuplicates;