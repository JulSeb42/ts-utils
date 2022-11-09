export const stringifyPx = (number: number | string | undefined) => {
    if (typeof number === "string") {
        return number
    } else {
        return `${number}px`
    }
}
