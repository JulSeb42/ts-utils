"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allCities_1 = require("./allCities");
const getRandomLocation = () => {
    const randomNumber = Math.floor(Math.random() * allCities_1.allCities.length);
    return `${allCities_1.allCities[randomNumber].name}, ${allCities_1.allCities[randomNumber].country}`;
};
exports.default = getRandomLocation;
