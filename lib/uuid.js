"use strict";

/*=============================================== Generate random UUID ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uuid = void 0;
function uuid() {
  return Math.floor(Math.random() * Date.now()).toString();
}
exports.uuid = uuid;