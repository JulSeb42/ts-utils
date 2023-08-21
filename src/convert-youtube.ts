/*=============================================== Convert Youtube link to `http://youtube.url/embed/123` ===============================================*/

export function convertYoutube(str: string): string {
    return str.replace("watch?v=", "embed/")
}
