"use strict";

/*=============================================== Get percentage of given value ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPercentage = void 0;
function getPercentage(partial, total) {
  return 100 * partial / total;
}
exports.getPercentage = getPercentage;