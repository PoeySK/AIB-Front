import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { setCurFont } from "../../config/fontReducer/fontReducer";

export const ImgWithText = ({
  imageUrl,
  initialTexts,
  initialTextPositions,
  onClickText,
}) => {
  const containerRef = useRef(null);
  const systemRef = useRef(null);
  const texts = initialTexts;
  const [editingIndex, setEditingIndex] = useState(null);
  const [editing, setEditing] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [textPositions, setTextPositions] = useState(initialTextPositions);
  const dispatch = useDispatch();
  
  const handleTextClick = (index) => {
    dispatch(setCurFont(texts[index]?.fontFamily, texts[index]?.fontSize));
    onClickText(texts[index]?.text);
  };

  const handleClickOutside = (e) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target) &&
      systemRef.current &&
      !systemRef.current.contains(e.target)
    ) {
      setEditing(false);
    }
  };

  const textStyles = textPositions.map((position, index) => ({
    top: `${position.y + 50}px`,
    left: `${position.x + 80}px`,
    fontSize: texts[index]?.fontSize ? `${texts[index].fontSize}px` : "24px",
    fontFamily: texts[index]?.fontFamily ? texts[index].fontFamily : "Arial",
  }));

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseDown = (e, index) => {
    if (editing) return;
    setDragging(true);
    setEditingIndex(index);
    setStartPos({
      x: e.clientX - textPositions[index].x,
      y: e.clientY - textPositions[index].y,
    });
  };

  const handleMouseMove = (e) => {
    if (!dragging || editingIndex === null) return;
    const newPosition = {
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y,
    };
    setTextPositions((prevPositions) =>
      prevPositions.map((pos, index) =>
        index === editingIndex ? newPosition : pos
      )
    );
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, startPos]);

  return (
    <form>
      <div
        style={{
          position: "relative",
          display: "inline-block",
        }}
        className="image-with-text"
        ref={containerRef}
      >
        <div>
          <img
            className="selectImg"
            src={imageUrl}
            alt="AIB Service and Project Completion"
          />
          {texts.map((text, index) => (
            <div
              className="text-wrapper"
              style={textStyles[index]}
              onClick={() => handleTextClick(index)}
              onMouseDown={(e) => handleMouseDown(e, index)}
              key={index}
            >
              {text.text}
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};
