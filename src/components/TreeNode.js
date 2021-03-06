import React, { useState } from "react";
import PropTypes from "prop-types";
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
      <div onClick={toggle}>
        <div>
          <div className="nodeElements">
            {state.visible ? (
              <div className={classNameToggle}>
                <i className="fa fa-caret-down"></i>
                <i className="fa fa-folder-open"></i>
              </div>
            ) : (
              <div className={classNameToggle}>
                <i className="fa fa-caret-right"></i>
                <i className="fa fa-folder"></i>
              </div>
            )}
          </div>
          <div className="nodeElements">
            <a
              href={node.url}
              target="balnk"
              className={node.url == null ? "" : "linked"}
            >
              <h5>{node.title}</h5>
            </a>
          </div>
        </div>
      </div>
      <ul style={style}>{children}</ul>
    </div>
  );
};

export default TreeNode;

TreeNode.propTypes = {
  node: PropTypes.object.isRequired,
};
