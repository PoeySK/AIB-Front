import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFontData } from "../../../config/fontReducer/fontReducer";

export const TextModify = (props) => {
  const font = useSelector(state => state.textElement);
  const dispatch = useDispatch();
  console.log(font);
  const handleFontColorChange = (e) => {
    dispatch();
  };

  const handleFontSizeChange = (e) => {
    const newFontSize = Number(e.target.value);
    dispatch();
  };

  return (
    <div>
      <div>
        <label>
          크기: &nbsp;
          <input
            type="number"
            value={0}
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
