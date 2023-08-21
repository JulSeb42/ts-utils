/*=============================================== To pascal case ===============================================*/

/**
 * @description Transforms a string to pascal case
 * @example toPascalCase("hello world") => HelloWorld
 */

export function toPascalCase(string: string): string | undefined {
    return string
        .toLowerCase()
        .replace(new RegExp(/[-_]+/g), " ")
        .replace(new RegExp(/[^\w\s]/g), "")
        .replace(
            new RegExp(/\s+(.)(\w*)/g),
            (_, $2, $3) => `${$2.toUpperCase() + $3}`
        )
        .replace(new RegExp(/\w/), s => s.toUpperCase())
}
