import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../store/actions";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.recipes.favorites);

  const handleRemoveFavorite = (id) => {
    console.log("Removing favorite with id:", id);
    dispatch(removeFavorite(id));
  };

  if (!favorites || favorites.length === 0) return <p>No favorites yet.</p>;

  return (
    <div className="favorites">
      {favorites.map((recipe) => (
        <div key={recipe.idMeal} className="recipe-card">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>{recipe.strMeal}</h3>
          <button onClick={() => handleRemoveFavorite(recipe.idMeal)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
