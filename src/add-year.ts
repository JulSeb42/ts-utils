import { getToday } from "./get-today"

/**
 * @description Add a number of years to a set date. This function creates a new Date object
 * by adding the specified number of years to either a provided date or today's date.
 * Note: For leap year dates (Feb 29), adding years may result in date adjustment.
 *
 * @param {number} numberOfYears - The number of years to add (can be positive or negative)
 * @param {string} [dateFrom=getToday()] - The starting date in string format (optional, defaults to today)
 *
 * @returns {Date} A new Date object representing the calculated date
 *
 * @example
 * // Add 1 year to today
 * addYear(1)
 *
 * @example
 * // Add 5 years to a specific date
 * addYear(5, "2024-08-24")
 *
 * @example
 * // Subtract 3 years from a specific date
 * addYear(-3, "2024-08-24")
 *
 * @example
 * // Note: Leap year adjustment
 * addYear(1, "2024-02-29") // Returns Feb 28, 2025 (non-leap year)
 */
export function addYear(numberOfYears: number, dateFrom: string = getToday()) {
    const date = new Date(dateFrom)
    return new Date(date.setFullYear(date.getFullYear() + numberOfYears))
}
