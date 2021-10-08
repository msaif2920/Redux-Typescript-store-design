import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "../state";
import RepoisitoriesList from "./RepositoriesList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a package</h1>
        <RepoisitoriesList />
      </div>
    </Provider>
  );
}

export default App;
