/*=============================================== Convert Youtube link ===============================================*/

/**
 * @description Converts a YouTube string to an embed URL
 * @example convertYoutube("https://www.youtube.com/watch?v=C9k0_rNyK-E") => https://www.youtube.com/embed/C9k0_rNyK-E
 */

export function convertYoutube(str: string): string {
    return str.replace("watch?v=", "embed/")
}
