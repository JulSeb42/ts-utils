import { getToday } from "./get-today"

/**
 * @description Add a number of months to a set date. This function creates a new Date object
 * by adding the specified number of months to either a provided date or today's date.
 * Note: If the day doesn't exist in the target month, JavaScript will automatically adjust.
 *
 * @param {number} numberOfMonths - The number of months to add (can be positive or negative)
 * @param {string} [dateFrom=getToday()] - The starting date in string format (optional, defaults to today)
 *
 * @returns {Date} A new Date object representing the calculated date
 *
 * @example
 * // Add 1 month to today
 * addMonth(1)
 *
 * @example
 * // Add 6 months to a specific date
 * addMonth(6, "2024-08-24")
 *
 * @example
 * // Subtract 2 months from a specific date
 * addMonth(-2, "2024-08-24")
 *
 * @example
 * // Note: Date adjustment for invalid days
 * addMonth(1, "2024-01-31") // Returns Feb 29, 2024 (or Mar 2 in non-leap years)
 */
export function addMonth(
    numberOfMonths: number,
    dateFrom: string = getToday()
) {
    const date = new Date(dateFrom)
    return new Date(date.setMonth(date.getMonth() + numberOfMonths))
}
