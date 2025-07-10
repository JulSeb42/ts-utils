/**
 * @description Get today's date in YYYY-MM-DD format.
 * This function returns the current date formatted as a string with zero-padding.
 *
 * @returns {string} Today's date in "YYYY-MM-DD" format
 *
 * @example
 * // Get today's date
 * getToday() // Returns "2023-08-21" (example for August 21, 2023)
 *
 * @example
 * // Use as default parameter
 * function processDate(date = getToday()) {
 *   // Process the date
 * }
 */
export function getToday(): string {
    let today = new Date()
    let dd: number | string = today.getDate()
    let mm: number | string = today.getMonth() + 1
    let yy = today.getFullYear()

    if (dd < 10) {
        dd = "0" + dd
    }

    if (mm < 10) {
        mm = "0" + mm
    }

    return `${yy}-${mm}-${dd}`
}
