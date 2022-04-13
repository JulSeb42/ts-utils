"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var allCities_1 = require("./allCities");

var getRandomLocation = function () {
  var randomNumber = Math.floor(Math.random() * allCities_1.allCities.length);
  return "".concat(allCities_1.allCities[randomNumber].name, ", ").concat(allCities_1.allCities[randomNumber].country);
};

exports.default = getRandomLocation;