import React from "react";
import "./App.css";
import Main from "../main/main";
import Blog from "../blog/Blog";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route>
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/" component={Main} />
      </Route>
    </div>
  );
}

export default App;
