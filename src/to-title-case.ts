/*=============================================== To title case ===============================================*/

/**
 * @description Transforms a string to title case
 * @example toTitleCase("hello world") => Hello World
 */

export function toTitleCase(string: string): string {
    const arr = string.toLowerCase().split(" ")

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }

    return arr.join(" ")
}
