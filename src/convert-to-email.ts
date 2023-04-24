import { slugify } from "./slugify"

export const convertToEmail = (name: string, domain?: string) => {
    return `${slugify(name).replace(/-/g, ".").replace(/ /g, ".")}@${
        domain || "email.com"
    }`
}
