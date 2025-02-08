import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useSelector((state) =>
    state.recipes.recipes.find((meal) => meal.idMeal === id)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="recipe-details">
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetails;
