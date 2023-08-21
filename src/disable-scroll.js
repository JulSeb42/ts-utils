"use strict";
/*=============================================== Disable page scroll ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableScroll = void 0;
function disableScroll() {
    return document.body.classList.add("stop-scrolling");
}
exports.disableScroll = disableScroll;
