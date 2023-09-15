import React from "react";

export const TextBox = ({ selectedText }) => {
    // const handleTextClick = () => {
    //     handleTextSelection("새로운 텍스트");
    // }
    return (
        <div>
            <p>선택한 Text: {selectedText}</p>
        </div>

    );
};