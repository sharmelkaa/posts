export const debounce = (callback, delay=400) => {
    let timerId
    return function(...args) {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            callback.apply(this, args)
        }, delay)
    }
}