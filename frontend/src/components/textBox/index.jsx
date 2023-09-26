import React from "react";
import "./index.css";

export const TextBox = ({ selectedText }) => {
  return (
    <div>
      <p>
        선택한 Text: <br />
      </p>
      <div id="selected-text">{selectedText}</div>
    </div>
  );
};
