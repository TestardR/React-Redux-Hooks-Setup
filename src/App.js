import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/index";
import PostsList from "./components/PostsList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">Redux React with Hooks</div>
      <PostsList />
    </Provider>
  );
}

export default App;
