export const checkSym = (e) => {
    const key = e.key
    const availableSigns = /[a-zA-Z\s0-9]/
    if (!availableSigns.test(key)) {
        e.preventDefault()
    }
}