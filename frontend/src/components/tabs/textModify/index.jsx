import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const font = useSelector(state => state.font);
  const [fontSize, setFontSize] = useState(font.fontSize);
  const dispatch = useDispatch();
  
  const handleFontChange = (e) => {
    const newFontFamily = e.target.value;
    dispatch(setCurFont(newFontFamily, font.fontSize));
  };

  const handleFontSizeChange = (e) => {
    const newFontSize = Number(e.target.value);
    dispatch(setCurFont(font.fontName, newFontSize));
    setFontSize(newFontSize);
  };

  return (
    <div>
      <div>
        글꼴: &nbsp;
        <select value={font.fontName} onChange={handleFontChange}>
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
            value={font.fontSize}
            onChange={handleFontSizeChange}
            style={{ width: 50, height: 15 }}
          />
        </label>
      </div>
    </div>
  );
};
