/*=============================================== Format date ===============================================*/

/**
 * @description Format a Date to `yyyy-mm-dd`
 * @example formatDate(new Date("Mon Aug 21 2023 17:01:50 GMT+0100")) => 2023-08-21
 */

export function formatDate(date: Date): string {
    const year = date.getFullYear()
    let month: string | number = date.getMonth()
    let day: string | number = date.getDate()

    if (month < 10) month = `0${month}`

    if (day < 10) day = `0${day}`

    return `${year}-${month}-${day}`
}
