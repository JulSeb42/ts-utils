/*=============================================== To pascal case ===============================================*/

import { toBaseCase } from "./to-base-case"

/**
 * @description Transforms a string ToPascalCase
 * @param string: string
 * @example toPascalCase("hello world") => HelloWorld
 */

export function toPascalCase(string: string): string | undefined {
    const formattedString = toBaseCase(string)

    return formattedString
        .toLowerCase()
        .replace(new RegExp(/[-_]+/g), " ")
        .replace(new RegExp(/[^\w\s]/g), "")
        .replace(
            new RegExp(/\s+(.)(\w*)/g),
            (_, $2, $3) => `${$2.toUpperCase() + $3}`
        )
        .replace(new RegExp(/\w/), s => s.toUpperCase())
}
