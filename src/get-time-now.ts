/*=============================================== Get time now in format `hour:minutes:seconds` ===============================================*/

export function getTimeNow(withSeconds?: boolean): string {
    const today = new Date()
    let hours: number | string = today.getHours()
    let minutes: number | string = today.getMinutes()
    let seconds: number | string = today.getSeconds()

    if (hours < 10) {
        hours = `0${hours}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    return `${hours}:${minutes}${withSeconds ? `:${seconds}` : ""}`
}
