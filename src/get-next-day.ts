/**
 * @description Get the next day's date in YYYY-MM-DD format.
 * This function adds 24 hours to the given date and formats it as a date string.
 *
 * @param {string | Date} currentDate - The current date to get the next day from
 *
 * @returns {string} The next day's date in "YYYY-MM-DD" format
 *
 * @example
 * // Get next day from date string
 * getNextDay("2023-08-21") // Returns "2023-08-22"
 *
 * @example
 * // Get next day from Date object
 * getNextDay(new Date("2023-12-31")) // Returns "2024-01-01"
 *
 * @example
 * // Handle month/year transitions
 * getNextDay("2023-01-31") // Returns "2023-02-01"
 */
export function getNextDay(currentDate: string | Date): string {
    const today = new Date(currentDate.toString())
    const nextDate = new Date(Number(today) + 3600 * 1000 * 24)

    let dd: string | number = nextDate.getDate()
    let mm: string | number = nextDate.getMonth() + 1
    let yy: string | number = nextDate.getFullYear()

    if (dd < 10) {
        dd = "0" + dd
    }

    if (mm < 10) {
        mm = "0" + mm
    }

    return `${yy}-${mm}-${dd}`
}
