/*=============================================== Capitalize ===============================================*/

/**
 * @description Capitalize a string
 * @param str: string
 * @example capitalize("hello world") => Hello world
 */

export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
