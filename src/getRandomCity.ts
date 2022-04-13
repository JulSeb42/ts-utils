import { allCities } from "./allCities"

const getRandomCity = (country: string) => {
    const filteredArr = allCities.filter(
        city => city.country.toLowerCase() === country.toLowerCase()
    )
    const randomNumber = Math.floor(Math.random() * allCities.length)
    const randomNumberFiltered = Math.floor(Math.random() * filteredArr.length)

    if (country === "all") {
        return `${allCities[randomNumber].name}, ${allCities[randomNumber].country}`
    } else {
        return `${allCities[randomNumberFiltered].name}, ${
            country.charAt(0).toUpperCase() + country.slice(1)
        }`
    }
}

export default getRandomCity
