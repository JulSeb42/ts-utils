/*=============================================== Disable scroll ===============================================*/

/**
 * @description Disable page scroll
 * @example disableScroll()
 */

export function disableScroll(): void {
    return document.body.classList.add("stop-scrolling")
}
