import React from "react";
import ReactDOM from "react-dom/client"; // ✅ React 18 Fix
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // ✅ Use named import
import App from "./App";
import recipesReducer from "./store/recipeReducer";
import "../styles/index.scss";

// Combine reducers
const rootReducer = combineReducers({
  recipes: recipesReducer,
});

// Apply middleware correctly
const store = createStore(rootReducer, applyMiddleware(thunk)); // ✅ Use named import

// React 18 render fix
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
