import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFontData } from "../../../config/fontReducer/fontReducer";

export const TextModify = (props) => {
  const font = useSelector(state => state.font.textElement);
  const tIndex =useSelector(state => state.tIndex.textIndex);
  const dispatch = useDispatch();

  const fontSizes = [...font.fontSizes];

  const handleFontColorChange = (e) => {
    dispatch();
  };

  const handleFontSizeChange = (e) => {
    const newFontSize = Number(e.target.value);
    fontSizes[tIndex] = newFontSize;
    dispatch(setFontData(tIndex, newFontSize, font.fontColor));
  };

  return (
    <div>
      <div>
        <label>
          크기: &nbsp;
          <input
            type="number"
            value={fontSizes[tIndex]}
            onChange={handleFontSizeChange}
            style={{ width: 50, height: 15 }}
          />
        </label>
      </div>
      <div>
        색깔: &nbsp;
      </div>
    </div>
  );
};
