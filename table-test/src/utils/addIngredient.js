const setIngredient = (inputs) => {
    const ingredient = {};
    for(let input of inputs) {
        ingredient[input.id] = input.value
    }
    return ingredient;
}

export default setIngredient