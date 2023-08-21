/*=============================================== Format hour ===============================================*/

/**
 * @description Format hour with half times
 * @example formatHour(3.5) => 03:30
 */

export function formatHour(hour: number): string {
    return `${hour < 10 ? "0" : ""}${Math.floor(hour)}:${
        hour % 1 !== 0 ? 3 : 0
    }0`
}
