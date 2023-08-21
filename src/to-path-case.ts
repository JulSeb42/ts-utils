/*=============================================== To path case ===============================================*/

/**
 * @description Transforms a string to path case
 * @example toPathCase("hello world") => hello/world
 */

export function toPathCase(string: string): string | undefined {
    return string
        .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        ?.map(x => x.toLowerCase())
        .join("/")
}
