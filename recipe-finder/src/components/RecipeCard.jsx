import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <p>Ingredients: {recipe.ingredients.join(", ")}</p>
      <p>Preparation Time: {recipe.preparationTime} minutes</p>
    </div>
  );
};

export default RecipeCard;
