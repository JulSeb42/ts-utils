"use strict";
/*=============================================== Filter objects ===============================================*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterObject = void 0;
function filterObject(obj, fn) {
    var next = __assign({}, obj);
    var entries = [];
    for (var key in obj) {
        entries.push([key, obj[key]]);
    }
    for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        if (!fn(entry, i, entries)) {
            delete next[entry[0]];
        }
    }
    return next;
}
exports.filterObject = filterObject;
