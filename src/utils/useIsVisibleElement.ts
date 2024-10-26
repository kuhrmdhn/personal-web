export const isVisibleElement = (el:HTMLElement) => {
    const { top, bottom } = el.getBoundingClientRect()
    const { innerHeight } = window
    return top > 0 && innerHeight > top || bottom > 0 && innerHeight > bottom || top < 0 && bottom < 0
}
