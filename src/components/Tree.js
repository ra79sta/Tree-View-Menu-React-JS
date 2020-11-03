import React from "react";
import TreeNode from "./TreeNode";

const Tree = (props) => {
  const { node } = props;

  const element = node.map((arrayRootElements, index) => {
    return (
      <li key={index}>
        <TreeNode node={arrayRootElements} />
      </li>
    );
  });
  return <ul>{element}</ul>;
};

export default Tree;
