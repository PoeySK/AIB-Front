import React, { useState, useEffect } from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { setFontData } from "../../config/fontReducer/fontReducer";
import { setTIndex } from "../../config/textIndexReducer/textIndexReducer";

export const ImageAndText = (props) => {
    const { realTestImage } = props;

    const [textIndex, setTextIndex] = useState(null);
    const [dragging, setDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [textPositions, setTextPositions] = useState(realTestImage.positions);

    const dispatch = useDispatch();
    const font = useSelector(state => state.textElements);
    const tIndex = useSelector(state => state.tIndex);

    const handleTextClick = (index) => {
        props.onClick(realTestImage.texts[index]);
        dispatch(setTIndex(index));
    };

    const handleMouseDown = (e, index) => {
        setDragging(true);
        setTextIndex(index);
        setStartPos({
            x: e.clientX - textPositions[index].x,
            y: e.clientY - textPositions[index].y,
        });
    };

    const handleMouseMove = (e) => {
        if (!dragging || textIndex === null) return;
        const newPosition = {
            x: e.clientX - startPos.x,
            y: e.clientY - startPos.y,
        };
        setTextPositions((prevPositions) =>
            prevPositions.map((pos, index) =>
                index === textIndex ? newPosition : pos
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

    const handleResetButtonClick = () => {
        setTextIndex(null);
        setDragging(false);
        setTextPositions(realTestImage.positions);
    }

    return (
        <>
            <div
                className="image-and-text"
                style={{
                    position: "absolute",
                    display: "inline-block"
                }}
            >
                <img
                    id="select-img"
                    src={realTestImage.imageBase64}
                    alt="AIB Service..."
                />
                {realTestImage.texts.map((text, index) => (
                    <div
                        className="text-wrapper"
                        key={index}
                        style={{
                            position: "absolute",
                            left: `${textPositions[index].x + 50}px`,
                            top: `${textPositions[index].y + 80}px`,
                            fontSize: realTestImage.fontSize[index] + "px",
                            letterSpacing: realTestImage.kerning[index] + "px",
                            color: realTestImage.textColor,
                            textAlign: realTestImage.alignment,
                        }}
                        onClick={() => handleTextClick(index)}
                        onMouseDown={(e) => handleMouseDown(e, index)}
                    >
                        {text}
                    </div>
                ))}
            </div>
            <div
                style={{
                    position: "fixed",
                    display: "flex"
                }}
            >
                <button
                    id="reset-btn"
                    onClick={handleResetButtonClick}
                >
                    원래대로
                </button>
            </div>
        </>
    );
};