/*=============================================== To snake case ===============================================*/

/**
 * @description Transforms a string to snake case
 * @example toSnakeCase("hello world") => hello_world
 */

export function toSnakeCase(string: string): string | undefined {
    return string
        .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        ?.map(x => x.toLowerCase())
        .join("_")
}
