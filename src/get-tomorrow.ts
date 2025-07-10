/**
 * @description Get tomorrow's date in YYYY-MM-DD format.
 * This function calculates tomorrow's date by adding 24 hours to the current time.
 *
 * @returns {string} Tomorrow's date in "YYYY-MM-DD" format
 *
 * @example
 * // Get tomorrow's date
 * getTomorrow() // Returns "2023-08-22" (example for tomorrow if today is August 21, 2023)
 *
 * @example
 * // Handle month/year transitions
 * getTomorrow() // Returns "2024-01-01" (if today is December 31, 2023)
 */
export function getTomorrow(): string {
    const tomorrow = new Date(Date.now() + 3600 * 1000 * 24)
    let dd: string | number = tomorrow.getDate()
    let mm: string | number = tomorrow.getMonth() + 1
    let yy: string | number = tomorrow.getFullYear()

    if (dd < 10) {
        dd = "0" + dd
    }

    if (mm < 10) {
        mm = "0" + mm
    }

    return `${yy}-${mm}-${dd}`
}
