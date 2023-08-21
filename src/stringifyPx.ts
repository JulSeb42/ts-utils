/*=============================================== Transform a value to `(value)px` ===============================================*/

export function stringifyPx(number: number | string): string {
    if (typeof number === "string") {
        return number
    } else {
        return `${number}px`
    }
}
