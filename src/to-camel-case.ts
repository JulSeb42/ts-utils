/*=============================================== To camel case ===============================================*/

/**
 * @description Transforms a string to camel case
 * @example toCamelCase("hello world") => helloWorld
 */

export function toCamelCase(string: string): string {
    return string
        .toLowerCase()
        .replace(new RegExp(/[-_]+/g), " ")
        .replace(new RegExp(/[^\w\s]/g), "")
        .replace(
            new RegExp(/\s+(.)(\w*)/g),
            (_, $2, $3) => `${$2.toUpperCase() + $3}`
        )
}
