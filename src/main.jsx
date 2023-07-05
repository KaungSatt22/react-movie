import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./Context/SearchContext.jsx";
import { FavoriteProvider } from "./Context/FavoriteContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </ContextProvider>
  </React.StrictMode>
);
