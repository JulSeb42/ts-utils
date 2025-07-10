import { getToday } from "./get-today"

/**
 * @description Add a number of days to a set date. This function creates a new Date object
 * by adding the specified number of days to either a provided date or today's date.
 *
 * @param {number} numberOfDays - The number of days to add (can be positive or negative)
 * @param {string} [dateFrom=getToday()] - The starting date in string format (optional, defaults to today)
 *
 * @returns {Date} A new Date object representing the calculated date
 *
 * @example
 * // Add 1 day to today
 * addDay(1)
 *
 * @example
 * // Add 7 days to a specific date
 * addDay(7, "2024-08-24")
 *
 * @example
 * // Subtract 3 days from a specific date
 * addDay(-3, "2024-08-24")
 */
export function addDay(numberOfDays: number, dateFrom: string = getToday()) {
    const date = new Date(dateFrom)
    return new Date(date.setDate(date.getDate() + numberOfDays))
}
