"use strict";
/*=============================================== Enable scroll ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableScroll = void 0;
/**
 * @description Enable page scroll
 * @example enableScroll()
 */
function enableScroll() {
    return document.body.classList.remove("stop-scrolling");
}
exports.enableScroll = enableScroll;
