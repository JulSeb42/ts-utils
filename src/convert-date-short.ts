/**
 * @description Convert a date to a short date format (DD MMM YYYY).
 * This function takes a Date object or date string and formats it as a readable short date.
 *
 * @param {Date | string} date - The date to convert (Date object or date string)
 *
 * @returns {string} The formatted date string in "DD MMM YYYY" format
 *
 * @example
 * // Convert date string
 * convertDateShort("2023-08-12") // Returns "12 Aug 2023"
 *
 * @example
 * // Convert Date object
 * convertDateShort(new Date("2023-12-25")) // Returns "25 Dec 2023"
 *
 * @example
 * // Convert with single digit day
 * convertDateShort("2023-01-05") // Returns "05 Jan 2023"
 */
export function convertDateShort(date: Date | string): string {
    date = typeof date === "string" ? new Date(date) : date

    const formatDate = (year: number, month: number, day: number) =>
        `${year}-${month < 10 ? 0 : ""}${month}-${day}`

    const formated = formatDate(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    )

    const splitted = formated.split("-")

    const day = splitted[2]
    let month = splitted[1]
    const year = splitted[0]

    let convertedMonth =
        month === "01"
            ? "Jan"
            : month === "02"
            ? "Feb"
            : month === "03"
            ? "Mar"
            : month === "04"
            ? "Apr"
            : month === "05"
            ? "May"
            : month === "06"
            ? "Jun"
            : month === "07"
            ? "Jul"
            : month === "08"
            ? "Aug"
            : month === "09"
            ? "Sep"
            : month === "10"
            ? "Oct"
            : month === "11"
            ? "Nov"
            : month === "12"
            ? "Dec"
            : "Error in date"

    return `${day} ${convertedMonth} ${year}`
}
