"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var allCities_1 = require("./allCities");

var getRandomCity = function (country) {
  var filteredArr = allCities_1.allCities.filter(function (city) {
    return city.country.toLowerCase() === country.toLowerCase();
  });
  var randomNumber = Math.floor(Math.random() * allCities_1.allCities.length);
  var randomNumberFiltered = Math.floor(Math.random() * filteredArr.length);

  if (country === "all") {
    return "".concat(allCities_1.allCities[randomNumber].name, ", ").concat(allCities_1.allCities[randomNumber].country);
  } else {
    return "".concat(allCities_1.allCities[randomNumberFiltered].name, ", ").concat(country.charAt(0).toUpperCase() + country.slice(1));
  }
};

exports.default = getRandomCity;