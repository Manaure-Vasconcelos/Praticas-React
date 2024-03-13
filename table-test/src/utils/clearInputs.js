const ClearInputs = (inputs) => {
    for(let input of inputs) {
        input.value = ''
    }
    inputs[0].focus()
}

export default ClearInputs