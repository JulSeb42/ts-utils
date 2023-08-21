/*=============================================== Format hour from `3.5` to `03:30` ===============================================*/

export function formatHour(hour: number): string {
    return `${hour < 10 ? "0" : ""}${Math.floor(hour)}:${
        hour % 1 !== 0 ? 3 : 0
    }0`
}
