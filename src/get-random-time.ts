/**
 * @description Generate a random time in HH:MM or HH:MM:SS format within a specified hour range.
 * This function creates random time values with configurable hour range and optional seconds.
 *
 * @param {number} [min=0] - The minimum hour (0-23, defaults to 0)
 * @param {number} [max=23] - The maximum hour (0-23, defaults to 23)
 * @param {boolean} [withSeconds=false] - Whether to include seconds in the format
 *
 * @returns {string} A random time in "HH:MM" or "HH:MM:SS" format
 *
 * @example
 * // Generate random time (default range)
 * getRandomTime() // Returns "03:04"
 *
 * @example
 * // Generate random time with seconds
 * getRandomTime(0, 23, true) // Returns "15:42:38"
 *
 * @example
 * // Generate random time in business hours
 * getRandomTime(9, 17) // Returns "12:30" (between 9 AM and 5 PM)
 *
 * @example
 * // Generate random morning time
 * getRandomTime(6, 12, true) // Returns "08:25:15"
 */
export function getRandomTime(
    min = 0,
    max = 23,
    withSeconds?: boolean
): string {
    let hour: number | string = Math.floor(Math.random() * (max - min)) + min
    let minutes: number | string = Math.floor(Math.random() * (59 - 0) + 0)
    let seconds: number | string = Math.floor(Math.random() * (59 - 0) + 0)

    if (hour < 10) {
        hour = `0${hour}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    return `${hour}:${minutes}${withSeconds ? `:${seconds}` : ""}`
}
