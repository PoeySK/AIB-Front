import React, { useState } from "react";

const fontOptions = [
  { value: "Arial", label: "Arial" },
  { value: "Helvetica", label: "Helvetica" },
  { value: "Times New Roman", label: "Times New Roman" },
  { value: "Courier New", label: "Courier New" },
  { value: "Verdana", label: "Verdana" },
  // ...
];

export const TextModify = ({ selectedText }) => {
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontSize, setFontSize] = useState(24);
  console.log("textmodify:", selectedText);

  const handleFontChange = (e) => {
    const newFontFamily = e.target.value;
    console.log(newFontFamily);
    // setTexts((prevTexts) =>
    //   prevTexts.map((text, index) => {
    //     if (index === editingIndex) {
    //       return { ...text, fontFamily: newFontFamily };
    //     }
    //     return text;
    //   })
    // );
    setFontFamily(newFontFamily);
  };

  // const handleFontSizeChange = (e) => {
  //   const newFontSize = Number(e.target.value);
  //   setTexts((prevTexts) =>
  //     prevTexts.map((text, index) => {
  //       if (index === editingIndex) {
  //         return { ...text, fontSize: newFontSize };
  //       }
  //       return text;
  //     })
  //   );
  //   setFontSize(newFontSize);
  // };

  return (
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
  );
};
