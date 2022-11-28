/**
 * Checks if an element is scrolled into view.
 * @param {HTMLElement} element The element to observe
 * @param {boolean} fullyInView Determines if the element must be fully in view (`false` by default)
 * @returns 
 */
export function elementInView(element: HTMLElement, fullyInView: boolean = false): boolean {
    const pageTop: number = window.pageYOffset;
    const pageBottom: number = pageTop + window.innerHeight;
    const elementTop: number = element.offsetTop;
    const elementBottom: number = elementTop + element.offsetHeight;

    if (fullyInView) {
        return pageTop < elementTop && pageBottom > elementBottom;
    } else {
        return elementTop <= pageBottom && elementBottom >= pageTop;
    }
}

/**
 * Matches the file type of a file when given the file name.
 * @param {string} filename The file name
 * @returns
 */
export function fileType(filename: string): string {
    const match: RegExpMatchArray | null = filename.match(/(\.[a-z]{3,})$/g);
    if (!match) throw new Error("Invalid file name provided");
    return match[0].slice(1, match[0].length);
}

/**
 * Scrolls the page to the element with the matching id.
 * @param {string} id The id of the element
 * @param {ScrollBehavior} behavior The scroll behavior (`auto` by default)
 */
export function scrollToElement(id: string, behavior: ScrollBehavior = "auto"): void {
    const element: HTMLElement | null = document.getElementById(id);

    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior
        });
    }
}
