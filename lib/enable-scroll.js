"use strict";

/*=============================================== Enable page scroll ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enableScroll = void 0;
function enableScroll() {
  return document.body.classList.remove("stop-scrolling");
}
exports.enableScroll = enableScroll;