/*=============================================== To sentence case ===============================================*/

/**
 * @description Transforms a string to sentence case
 * @example toSentenceCase("hello world") => Hello world
 */

export function toSentenceCase(string: string): string | undefined {
    return (
        string.toLowerCase().charAt(0).toUpperCase() +
        string.slice(1).toLowerCase()
    )
}
