export const fetchRecipes = (query) => {
  return async (dispatch) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      if (data.meals) {
        dispatch({ type: "FETCH_RECIPES", payload: data.meals });
      } else {
        dispatch({ type: "FETCH_RECIPES", payload: [] }); // No results found
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      dispatch({ type: "FETCH_RECIPES", payload: [] });
    }
  };
};

export const addFavorite = (recipe) => ({
  type: "ADD_FAVORITE",
  payload: recipe,
});

export const removeFavorite = (id) => ({
  type: "REMOVE_FAVORITE",
  payload: id,
});
