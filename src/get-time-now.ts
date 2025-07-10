/**
 * @description Get the current time formatted as HH:MM with optional seconds and milliseconds.
 * This function returns the current time with configurable precision.
 *
 * @param {Object} [options] - Configuration options for time format
 * @param {boolean} [options.withSeconds] - Whether to include seconds in the format
 * @param {boolean} [options.withMiliSeconds] - Whether to include milliseconds in the format
 *
 * @returns {string} The current time formatted as a string
 *
 * @example
 * // Get basic time format
 * getTimeNow() // Returns "11:22"
 *
 * @example
 * // Get time with seconds
 * getTimeNow({ withSeconds: true }) // Returns "11:22:33"
 *
 * @example
 * // Get time with milliseconds
 * getTimeNow({ withMiliSeconds: true }) // Returns "11:22:33:456"
 *
 * @example
 * // Get time with both seconds and milliseconds
 * getTimeNow({ withSeconds: true, withMiliSeconds: true }) // Returns "11:22:33:456"
 */
export function getTimeNow(options?: {
    withSeconds?: boolean
    withMiliSeconds?: boolean
}): string {
    const today = new Date()
    let hours: number | string = today.getHours()
    let minutes: number | string = today.getMinutes()
    let seconds: number | string = today.getSeconds()
    let mili: number | string = today.getMilliseconds()

    if (hours < 10) {
        hours = `0${hours}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    if (mili < 10) {
        mili = `0${mili}`
    }

    return `${hours}:${minutes}${
        options?.withSeconds || options?.withMiliSeconds ? `:${seconds}` : ""
    }${options?.withMiliSeconds ? `:${mili}` : ""}`
}
