/**
 * @description Get a random avatar URL from the cartoon-avatar library.
 * This function generates URLs for random cartoon avatars from the GitHub repository.
 * Source: https://github.com/Ashwinvalento/cartoon-avatar
 *
 * @param {"male" | "female" | "other"} [gender="other"] - The gender for the avatar
 *
 * @returns {string} A URL pointing to a random cartoon avatar image
 *
 * @example
 * // Get random male avatar
 * getRandomAvatar("male") // Returns "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/9.png"
 *
 * @example
 * // Get random female avatar
 * getRandomAvatar("female") // Returns "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/42.png"
 *
 * @example
 * // Get random avatar of any gender
 * getRandomAvatar() // Returns random male or female avatar
 *
 * @example
 * // Use in image element
 * const avatarUrl = getRandomAvatar("other")
 * // <img src={avatarUrl} alt="Random avatar" />
 */
export function getRandomAvatar(
    gender: "male" | "female" | "other" = "other"
): string {
    const random = Math.floor(Math.random() * (114 - 1 + 1) + 1)
    const randomMf = Math.floor(Math.random() + 0.5)
    const mf = ["male", "female"]

    const genderPicture =
        gender === "male"
            ? "male"
            : gender === "female"
            ? "female"
            : mf[randomMf]

    return `https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/${genderPicture}/${random}.png`
}
