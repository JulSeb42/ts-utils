/**
 * @description Convert a string to a URL-friendly slug format.
 * This function transforms text into lowercase, replaces spaces with hyphens,
 * removes special characters, and handles accented characters.
 *
 * @param {string} string - The string to convert to a slug
 *
 * @returns {string} The slugified string suitable for URLs
 *
 * @example
 * // Basic slugify
 * slugify("Hello World") // Returns "hello-world"
 *
 * @example
 * // Handle accented characters
 * slugify("Café & Restaurant") // Returns "cafe-restaurant"
 *
 * @example
 * // Handle special characters
 * slugify("My Blog Post: Part 1!") // Returns "my-blog-post-part-1"
 *
 * @example
 * // Handle multiple spaces and punctuation
 * slugify("   Multiple   Spaces...   ") // Returns "multiple-spaces"
 */
export function slugify(string: string): string {
    let formattedString = string.toLowerCase().replaceAll(" ", "-")

    formattedString = formattedString.replace(/^\s+|\s+$/g, "")
    formattedString = formattedString.toLowerCase()

    const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;-"
    const to = "aaaaeeeeiiiioooouuuunc-- --- "
    for (let i = 0, l = from.length; i < l; i++) {
        formattedString = formattedString.replace(
            new RegExp(from.charAt(i), "g"),
            to.charAt(i)
        )
    }

    formattedString = formattedString
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")

    return formattedString
}
