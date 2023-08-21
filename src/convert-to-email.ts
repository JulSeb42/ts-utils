/*=============================================== Convert string to email ===============================================*/

import { slugify } from "./slugify"

export function convertToEmail(name: string, domain = "email.com"): string {
    return `${slugify(name).replace(/-/g, ".").replace(/ /g, ".")}@${domain}`
}
