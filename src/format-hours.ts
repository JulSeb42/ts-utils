export const formatHour = (hour: number) =>
    `${hour < 10 ? "0" : ""}${Math.floor(hour)}:${hour % 1 !== 0 ? 3 : 0}0`
