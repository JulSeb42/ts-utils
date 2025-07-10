import { slugify } from "./slugify"

/**
 * @description Convert a name string to an email address format.
 * This function slugifies the name, replaces hyphens with dots, and appends a domain.
 *
 * @param {string} name - The name to convert to email format
 * @param {string} [domain="email.com"] - The email domain to use (defaults to "email.com")
 *
 * @returns {string} The formatted email address
 *
 * @example
 * // Convert name with default domain
 * convertToEmail("Foo Baz") // Returns "foo.baz@email.com"
 *
 * @example
 * // Convert name with custom domain
 * convertToEmail("John Doe", "company.com") // Returns "john.doe@company.com"
 *
 * @example
 * // Convert name with special characters
 * convertToEmail("Marie-Claire O'Connor") // Returns "marie.claire.o.connor@email.com"
 */
export function convertToEmail(name: string, domain = "email.com"): string {
    return `${slugify(name).replace(/-/g, ".").replace(/ /g, ".")}@${domain}`
}
