/*=============================================== Generate random UUID ===============================================*/

export function uuid(): string {
    return Math.floor(Math.random() * Date.now()).toString()
}
