/*=============================================== Convert to email ===============================================*/

import { slugify } from "./slugify"

/**
 * @description Converts a string to an email address
 * @example convertToEmail("Foo Baz") => foo-baz@email.com
 */

export function convertToEmail(name: string, domain = "email.com"): string {
    return `${slugify(name).replace(/-/g, ".").replace(/ /g, ".")}@${domain}`
}
