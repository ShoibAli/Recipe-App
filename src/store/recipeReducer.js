const initialState = {
  recipes: [],
  favorites: [],
  loading: false,
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return { ...state, recipes: action.payload, loading: false };
    case "SET_LOADING":
      return { ...state, loading: true };
    case "ADD_FAVORITE":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (recipe) => recipe.idMeal !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default recipesReducer;
