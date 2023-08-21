/*=============================================== Get last name ===============================================*/

/**
 * @description Get last name of a full name
 * @example getLastName("John Doe") => Doe
 */

export function getLastName(str: string): string {
    const split = str.split(" ")
    return split[split.length - 1]
}
