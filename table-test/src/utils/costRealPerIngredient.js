const CostRealPerIngredient = ({ marketPrice, marketWeight, grossWeight }) => {
    return (marketPrice / marketWeight) * grossWeight;
}

export default CostRealPerIngredient;