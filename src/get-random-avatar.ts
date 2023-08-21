/*=============================================== Get random avatar from cartoon-avatar library ===============================================*/

export function getRandomAvatar(gender?: "male" | "female" | "other"): string {
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
