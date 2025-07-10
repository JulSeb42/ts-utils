/**
 * @description Convert a YouTube watch URL to an embed URL.
 * This function transforms YouTube watch URLs to be suitable for embedding in iframes.
 *
 * @param {string} url - The YouTube watch URL to convert
 *
 * @returns {string} The YouTube embed URL
 *
 * @example
 * // Convert standard YouTube URL
 * convertYoutube("https://www.youtube.com/watch?v=C9k0_rNyK-E")
 * // Returns "https://www.youtube.com/embed/C9k0_rNyK-E"
 *
 * @example
 * // Convert YouTube URL with additional parameters
 * convertYoutube("https://www.youtube.com/watch?v=ABC123&t=30s")
 * // Returns "https://www.youtube.com/embed/ABC123&t=30s"
 */
export function convertYoutube(url: string): string {
    return url.replace("watch?v=", "embed/")
}
