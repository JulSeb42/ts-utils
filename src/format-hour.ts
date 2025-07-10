/**
 * @description Format a numeric hour value to HH:MM time format.
 * This function converts decimal hours to time format, supporting half-hour increments.
 *
 * @param {number} hour - The hour value to format (supports decimals for half hours)
 *
 * @returns {string} The formatted time string in "HH:MM" format
 *
 * @example
 * // Format whole hour
 * formatHour(3) // Returns "03:00"
 *
 * @example
 * // Format half hour
 * formatHour(3.5) // Returns "03:30"
 *
 * @example
 * // Format double-digit hour
 * formatHour(15) // Returns "15:00"
 *
 * @example
 * // Format with decimal (treated as half hour)
 * formatHour(9.5) // Returns "09:30"
 */
export function formatHour(hour: number): string {
    const hourTime = (hour < 10 ? "0" : "") + Math.floor(hour)
    const minutes = `${hour % 1 !== 0 ? 3 : 0}0`

    return `${hourTime}:${minutes}`
}
