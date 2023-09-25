import React from "react";

export const TextBox = ({ selectedText }) => {
  return (
    <div>
      <p>
        선택한 Text: <br />
        {selectedText}
      </p>
    </div>
  );
};
