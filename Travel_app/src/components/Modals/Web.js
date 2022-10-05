import React from "react";
import './Modal.css'
const Web = (props) => {
  return (
    <div id='parent'>
    <button onClick={props.onClick}>X</button>
      <iframe
        width="560"
        height="315"
        src={props.website}
        title="website"
      ></iframe>
    </div>
  );
};

export default Web;
