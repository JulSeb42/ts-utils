/**
 * @description Converts a given time (Date object or ISO string) to a formatted string in HH:mm or HH:mm:ss format.
 *
 * @param {Date | string} time - The time to convert, as a Date object or a string parseable by Date.
 * @param {boolean} [withSeconds] - Optional flag to include seconds in the output format.
 *
 * @returns {string} The formatted time string in "HH:mm" or "HH:mm:ss" format.
 *
 * @example
 * convertTime(new Date('2024-06-01T09:05:03'), true); // "09:05:03"
 *
 * @example
 * convertTime('2024-06-01T14:07:00'); // "14:07"
 *
 * @example
 * convertTime(new Date(), false); // e.g., "16:30"
 */

export function convertTime(
    time: Date | string,
    withSeconds?: boolean
): string {
    let hours: string | number = new Date(time).getHours()
    let minutes: string | number = new Date(time).getMinutes()
    let seconds: string | number = new Date(time).getSeconds()

    if (hours < 10) {
        hours = "0" + hours.toString()
    }

    if (minutes < 10) {
        minutes = "0" + minutes.toString()
    }

    if (seconds < 10) {
        seconds = "0" + seconds.toString()
    }

    return `${hours}:${minutes}${withSeconds ? `:${seconds}` : ""}`
}
