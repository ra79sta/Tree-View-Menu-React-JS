import React from "react";
import "./App.css";
import Tree from "./components/Tree";
import tree from "./TreeObject/tree";

function App() {
  return (
    <div className="App">
      <Tree node={tree} />
    </div>
  );
}

export default App;
