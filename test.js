import { getRandomDate } from "./src/get-random-date";
import { generateNumbers } from "./src/generate-numbers";
generateNumbers(0, 499).map(function () {
    console.log(getRandomDate(2021, 2024));
});
