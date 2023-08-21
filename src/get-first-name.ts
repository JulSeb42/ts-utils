/*=============================================== Get first name ===============================================*/

/**
 * @description Get first name of a full name
 * @example getFirstName("John Doe") => John
 */

export function getFirstName(fullName: string): string {
    return fullName.split(" ")[0]
}
