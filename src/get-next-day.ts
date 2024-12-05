/*=============================================== Get tomorrow ===============================================*/

/**
 * @description Get tomorrow's date in format `yyyy-mm-dd`
 * @example getNextDay(currentDate: string | Date) => 2023-08-22
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
