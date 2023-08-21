"use strict";

/*=============================================== Disable scroll ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disableScroll = void 0;
/**
 * @description Disable page scroll
 * @example disableScroll()
 */
function disableScroll() {
  return document.body.classList.add("stop-scrolling");
}
exports.disableScroll = disableScroll;