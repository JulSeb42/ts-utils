"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const allCities_1 = require("./allCities");

const getRandomCity = country => {
  const filteredArr = allCities_1.allCities.filter(city => city.country.toLowerCase() === country.toLowerCase());
  const randomNumber = Math.floor(Math.random() * allCities_1.allCities.length);
  const randomNumberFiltered = Math.floor(Math.random() * filteredArr.length);

  if (country === "all") {
    return `${allCities_1.allCities[randomNumber].name}, ${allCities_1.allCities[randomNumber].country}`;
  } else {
    return `${allCities_1.allCities[randomNumberFiltered].name}, ${country.charAt(0).toUpperCase() + country.slice(1)}`;
  }
};

exports.default = getRandomCity;