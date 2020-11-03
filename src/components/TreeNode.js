import React, { useState } from "react";
import "../style/TreeNode.css";

const TreeNode = (props) => {
  const { node } = props;
  const [state, setState] = useState(true);
  let children;
  let classNameToggle;
  let style;

  const toggle = () => {
    setState({ visible: !state.visible });
  };

  if (node.children != null) {
    children = node.children.map((node, index) => {
      return (
        <li key={index}>
          <TreeNode node={node} />
        </li>
      );
    });

    classNameToggle = "togglable";
    if (state.visible) {
      classNameToggle += " togglable-down";
    } else {
      classNameToggle += " togglable-up";
    }
  } else {
    classNameToggle = "noToggle";
  }

  if (!state.visible) {
    style = { display: "none" };
  }

  return (
    <div>
      <h5 onClick={toggle} className={classNameToggle}>
        <a
          href={node.url}
          target="balnk"
          className={node.url == null ? "" : "linked"}
        >
          {node.title}
        </a>
      </h5>
      <ul style={style}>{children}</ul>
    </div>
  );
};

export default TreeNode;
