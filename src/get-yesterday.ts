/**
 * @description Get yesterday's date in YYYY-MM-DD format.
 * This function calculates yesterday's date by subtracting 24 hours from the current time.
 *
 * @returns {string} Yesterday's date in "YYYY-MM-DD" format
 *
 * @example
 * // Get yesterday's date
 * getYesterday() // Returns "2023-08-20" (example for yesterday if today is August 21, 2023)
 *
 * @example
 * // Handle month/year transitions
 * getYesterday() // Returns "2023-12-31" (if today is January 1, 2024)
 */
export function getYesterday(): string {
    const tomorrow = new Date(Date.now() - 3600 * 1000 * 24)
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
