import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurFont } from "../../../config/fontReducer/fontReducer";

const fontOptions = [
  { value: "Arial", label: "Arial" },
  { value: "Helvetica", label: "Helvetica" },
  { value: "Times New Roman", label: "Times New Roman" },
  { value: "Courier New", label: "Courier New" },
  { value: "Verdana", label: "Verdana" },
  // ...
];

export const TextModify = (props) => {
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontSize, setFontSize] = useState(24);
  const dispatch = useDispatch();


  console.log("textmodify:", props.selectedText);

  const handleFontChange = (e) => {
    const newFontFamily = e.target.value;
    props.getFontFamily(newFontFamily);
    setFontFamily(newFontFamily);
    dispatch(setCurFont(newFontFamily));
  };

  const handleFontSizeChange = (e) => {
    const newFontSize = Number(e.target.value);
    setFontSize(newFontSize);
  };

  return (
    <div>
      <div>
        글꼴: &nbsp;
        <select value={fontFamily} onChange={handleFontChange}>
          {fontOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>
          크기: &nbsp;
          <input
            type="number"
            value={fontSize}
            onChange={handleFontSizeChange}
            style={{ width: 50, height: 15 }}
          />
        </label>
      </div>
    </div>
  );
};
