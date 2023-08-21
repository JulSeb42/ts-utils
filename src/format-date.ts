/*=============================================== Format date to `yyyy-mm-dd` ===============================================*/

export function formatDate(date: Date): string {
    const year = date.getFullYear()
    let month: string | number = date.getMonth()
    let day: string | number = date.getDate()

    if (month < 10) month = `0${month}`

    if (day < 10) day = `0${day}`

    return `${year}-${month}-${day}`
}
