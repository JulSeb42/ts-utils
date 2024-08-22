"use strict";
/*=============================================== Disable scroll ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableScroll = disableScroll;
/**
 * @description Disable page scroll
 * @example disableScroll()
 */
function disableScroll() {
    var body = document.body;
    body.style.height = "100vh";
    body.style.overflow = "hidden";
    return;
}
