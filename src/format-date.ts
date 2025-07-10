/**
 * @description Format a Date object or date string to YYYY-MM-DD format.
 * This function converts dates to a standardized ISO date string format with zero-padding.
 *
 * @param {Date | string} date - The date to format (Date object or date string)
 *
 * @returns {string} The formatted date string in "YYYY-MM-DD" format
 *
 * @example
 * // Format Date object
 * formatDate(new Date("Mon Aug 21 2023 17:01:50 GMT+0100")) // Returns "2023-08-21"
 *
 * @example
 * // Format date string
 * formatDate("2023-12-25") // Returns "2023-12-25"
 *
 * @example
 * // Format with single digit month/day
 * formatDate(new Date("2023-01-05")) // Returns "2023-01-05"
 */
export function formatDate(date: Date | string): string {
    const formattedDate = new Date(date.toString())

    const year = formattedDate.getFullYear()
    let month: string | number = formattedDate.getMonth() + 1
    let day: string | number = formattedDate.getDate()

    if (month < 10) month = `0${month}`

    if (day < 10) day = `0${day}`

    return `${year}-${month}-${day}`
}
