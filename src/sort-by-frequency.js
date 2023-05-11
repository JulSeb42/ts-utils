"use strict";
exports.__esModule = true;
exports.sortByFrequency = void 0;
var sortByFrequency = function (array) {
    var frequency = {};
    var value;
    for (var i = 0; i < array.length; i++) {
        value = array[i].toLowerCase();
        if (value in frequency) {
            frequency[value]++;
        }
        else {
            frequency[value] = 1;
        }
    }
    var uniques = [];
    for (value in frequency) {
        uniques.push(value.toLowerCase());
    }
    var compareFrequency = function (a, b) {
        if (frequency[a] === frequency[b]) {
            return a - b;
        }
        return frequency[b] - frequency[a];
    };
    return uniques.sort(compareFrequency);
};
exports.sortByFrequency = sortByFrequency;
