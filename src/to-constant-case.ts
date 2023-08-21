/*=============================================== To constant case ===============================================*/

/**
 * @description Transforms a string to constant case
 * @example toConstantCase("hello world") => HELLO_WORLD
 */

export function toConstantCase(string: string): string | undefined {
    return string
        .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        ?.map(x => x.toLowerCase())
        .join("_")
        .toUpperCase()
}
