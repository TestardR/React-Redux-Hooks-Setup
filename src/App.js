import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/index";
import PostsList from "./components/PostsList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">Hello World</div>
      <PostsList />
    </Provider>
  );
}

export default App;
