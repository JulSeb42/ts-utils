/**
 * @description Generate a random date in YYYY-MM-DD format within a specified year range.
 * This function creates random dates with day (1-30), month (1-12), and year within the given range.
 *
 * @param {number} [minYear] - The minimum year for the random date (defaults to current year)
 * @param {number} [maxYear] - The maximum year for the random date (defaults to current year)
 *
 * @returns {string} A random date in "YYYY-MM-DD" format
 *
 * @example
 * // Generate random date in specific year range
 * getRandomDate(2021, 2022) // Returns "2021-09-17" (example)
 *
 * @example
 * // Generate random date in current year
 * getRandomDate() // Returns "2023-05-12" (example for current year)
 *
 * @example
 * // Generate random date in single year
 * getRandomDate(2020, 2020) // Returns "2020-03-25" (example)
 *
 * @example
 * // Generate date with minimum year only
 * getRandomDate(2022) // Returns random date from 2022 to current year
 */
export function getRandomDate(minYear?: number, maxYear?: number): string {
    const thisYear = new Date().getFullYear()
    const getMinYear = minYear || thisYear
    const getMaxYear = maxYear || thisYear

    let day: number | string = Math.floor(Math.random() * (30 - 1)) + 1
    let month: number | string = Math.floor(Math.random() * (12 - 1)) + 1
    let year = Math.floor(
        Math.random() * (getMaxYear - getMinYear + 1) + getMinYear
    )

    if (day < 10) {
        day = "0" + day
    }

    if (month < 10) {
        month = "0" + month
    }

    if (month === "02") {
        day = Math.floor(Math.random() * (28 - 1)) + 1
    }

    return `${year}-${month}-${day}`
}
