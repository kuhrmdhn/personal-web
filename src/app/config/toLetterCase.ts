export const toLetterCase = (str: string) => {
    return str.split("").slice(0, 1).toString().toUpperCase() + str.slice(1, str.length)
}