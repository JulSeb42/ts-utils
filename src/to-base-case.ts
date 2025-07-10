// ! DO NOT EXPORT THIS COMPONENT FROM LIBRARY

/**
 * @description Convert a string to a base case format by normalizing separators and accented characters.
 * This is an internal utility function used by other case conversion functions.
 *
 * @param {string} string - The string to convert to base case
 *
 * @returns {string} The normalized string with separators and accents converted
 *
 * @example
 * // Convert camelCase to spaced lowercase
 * toBaseCase("myVariableName") // Returns "my variable name"
 *
 * @example
 * // Handle accented characters
 * toBaseCase("café-résumé") // Returns "cafe resume"
 */
export function toBaseCase(string: string): string {
    let splitted = string
        .split(/\.?(?=[A-Z])/)
        .join(" ")
        .toLowerCase()

    const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;-"
    const to = "aaaaeeeeiiiioooouuuunc-- --- "
    for (let i = 0, l = from.length; i < l; i++) {
        splitted = splitted.replace(
            new RegExp(from.charAt(i), "g"),
            to.charAt(i)
        )
    }

    return splitted
}
