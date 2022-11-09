import { capitalize } from "./capitalize"

export const unslugify = (str: string) => {
    return capitalize(str.replace(/-/g, " ").replace(/_/g, " "))
}
