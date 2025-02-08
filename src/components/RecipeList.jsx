import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, addFavorite } from "../store/actions";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const dispatch = useDispatch();
  const { recipes, loading } = useSelector((state) => state.recipes);
  const [searchQuery, setSearchQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // On component mount, fetch recipes with an empty query to get the default list of meals.
  useEffect(() => {
    dispatch(fetchRecipes(""));
  }, [dispatch]);

  // Handle search form submission.
  // If the search query is empty, this will re-fetch the default list.
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchRecipes(searchQuery));
  };

  // Add recipe to favorites and show a popup notification.
  const handleAddFavorite = (recipe) => {
    dispatch(addFavorite(recipe));
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="recipe-list">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for recipes..."
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading recipes...</p>}
      {!loading && recipes.length === 0 && <p>No recipes found.</p>}

      <div className="cards-container">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} className="recipe-card">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3>{recipe.strMeal}</h3>
            <Link to={`/recipe/${recipe.idMeal}`}>View Details</Link>
            <button onClick={() => handleAddFavorite(recipe)}>
              Add to Favorites
            </button>
          </div>
        ))}
      </div>

      {showPopup && <div className="popup">Dish added to favorites!</div>}
    </div>
  );
};

export default RecipeList;
