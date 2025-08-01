/**
 * @description Convert a date to a full date format (DD MMMM YYYY).
 * This function takes a Date object or date string and formats it as a readable full date.
 *
 * @param {Date | string} date - The date to convert (Date object or date string)
 *
 * @returns {string} The formatted date string in "DD MMMM YYYY" format
 *
 * @example
 * // Convert date string
 * convertDate("2023-08-12") // Returns "12 August 2023"
 *
 * @example
 * // Convert Date object
 * convertDate(new Date("2023-12-25")) // Returns "25 December 2023"
 *
 * @example
 * // Convert with single digit day
 * convertDate("2023-01-05") // Returns "05 January 2023"
 */
export function convertDate(date: Date | string): string {
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
            ? "January"
            : month === "02"
            ? "February"
            : month === "03"
            ? "March"
            : month === "04"
            ? "April"
            : month === "05"
            ? "May"
            : month === "06"
            ? "June"
            : month === "07"
            ? "July"
            : month === "08"
            ? "August"
            : month === "09"
            ? "September"
            : month === "10"
            ? "October"
            : month === "11"
            ? "November"
            : month === "12"
            ? "December"
            : "Error in date"

    return `${day} ${convertedMonth} ${year}`
}
