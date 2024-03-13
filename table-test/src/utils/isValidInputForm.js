const IsValidInput = (inputs) => {
    const inputFocus = Array.from(inputs).includes(document.activeElement)

    if (!inputFocus) return

    for (let input of inputs) {
        if (!input.value) {
            alert('error')
            input.focus()
            return false
        }
    }
    return true
}

export default IsValidInput