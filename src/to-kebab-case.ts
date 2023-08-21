/*=============================================== To kebab case ===============================================*/

/**
 * @description Transforms a string to kebab case
 * @example toKebabCase("hello world") => hello-world
 */

export function toKebabCase(string: string): string | undefined {
    return string
        .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        ?.map(x => x.toLowerCase())
        .join("-")
}
