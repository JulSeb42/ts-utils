import slugify from "./slugify"

const convertToEmail = (name: string, domain: string) => {
    return `${slugify(name).replace(/-/g, ".").replace(/ /g, ".")}@${
        domain || "email.com"
    }`
}

export default convertToEmail
