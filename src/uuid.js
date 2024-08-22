"use strict";
/*=============================================== UUID ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = uuid;
/**
 * @description Generate a random UUID
 * @example uuid() => 518670321012
 */
function uuid() {
    return Math.floor(Math.random() * Date.now()).toString();
}
