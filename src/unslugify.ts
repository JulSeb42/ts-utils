import capitalize from "./capitalize"

const unslugify = (str: string) => {
    return capitalize(str.replace(/-/g, " ").replace(/_/g, " "))
}

export default unslugify
