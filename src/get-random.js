"use strict";
/*=============================================== Get random ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandom = void 0;
/**
 * @description Get a random value from an array
 * @example getRandom([1, 2, 3, 4]) => 3
 */
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
exports.getRandom = getRandom;
