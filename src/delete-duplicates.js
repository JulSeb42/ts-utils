"use strict";
exports.__esModule = true;
exports.deleteDuplicates = void 0;
var deleteDuplicates = function (arr) {
    return arr.filter(function (v, i, a) {
        return a.findIndex(function (v2) { return JSON.stringify(v2) === JSON.stringify(v); }) === i;
    });
};
exports.deleteDuplicates = deleteDuplicates;
