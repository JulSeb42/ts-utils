"use strict";
// const all components
const allCities = require("./lib/allCities.json");
const calculateTotalSum = require("./lib/calculateTotalSum");
const capitalize = require("./lib/capitalize");
const convertDate = require("./lib/convertDate");
const convertDateShort = require("./lib/convertDateShort");
const convertToEmail = require("./lib/convertToEmail");
const convertYoutube = require("./lib/convertYoutube");
const getFirstName = require("./lib/getFirstName");
const getLastName = require("./lib/getLastName");
const getRandom = require("./lib/getRandom");
const getRandomAvatar = require("./lib/getRandomAvatar");
const getRandomCity = require("./lib/getRandomCity");
const getRandomDate = require("./lib/getRandomDate");
const getRandomLocation = require("./lib/getRandomLocation");
const getRandomNumber = require("./lib/getRandomNumber");
const getRandomString = require("./lib/getRandomString");
const getRandomTime = require("./lib/getRandomTime");
const getTimeNow = require("./lib/getTimeNow");
const getToday = require("./lib/getToday");
const { passwordRegex, emailRegex } = require("./lib/regex");
const scrollToTop = require("./lib/scrollToTop");
const slugify = require("./lib/slugify");
const stringifyPx = require("./lib/stringifyPx");
const unslugify = require("./lib/unslugify");
const convertPrice = require("./lib/convertPrice");
// Exports all components
module.exports = {
    allCities,
    calculateTotalSum,
    capitalize,
    convertDate,
    convertDateShort,
    convertToEmail,
    convertYoutube,
    getFirstName,
    getLastName,
    getRandom,
    getRandomAvatar,
    getRandomCity,
    getRandomDate,
    getRandomLocation,
    getRandomNumber,
    getRandomString,
    getRandomTime,
    getTimeNow,
    getToday,
    passwordRegex,
    emailRegex,
    scrollToTop,
    slugify,
    stringifyPx,
    unslugify,
    convertPrice,
};
