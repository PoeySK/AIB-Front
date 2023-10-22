import React, { useState } from "react";
import "./index.css";
import { ImgWithText } from "../../components/imgWithText";
import { Layout } from "../../components/layouts";

const LastPage = () => {
  const imgTest = "./testImgJpeg.jpeg";
  const image = {
    imageUrl_front: imgTest,
    initialTexts: [
      {
        text: "AIB는\n 아이브라고 읽어!!@#1234",
        fontSize: 24,
        fontFamily: "Arial",
      },
      {
        text: "AIB Project\n 末!!!",
        fontSize: 18,
        fontFamily: "Courier New"
      },
      {
        text: "언제 이 프로젝트가\n끝날까...?",
        fontSize: 20,
        fontFamily: "Helvetica",
      },
    ],
    textPositions: [
      { x: 500, y: 200 },
      { x: 1000, y: 300 },
      { x: 1, y: 1 },
    ],
  };

  const [imageSize, setImageSize] = useState({ width: "100%", height: "100%" });
  const [selectedText, setSelectedText] = useState("");
  const [family, setFamily] = useState("");
  const [size, setSize] = useState();

  const getFontFamily = (f) => {
    setFamily(f);
  }

  const handleSelectedText = (newText) => {
    setSelectedText(newText);
  };

  return (
    <>
      <Layout selectedText={selectedText} getFontFamily={getFontFamily}>
        <div
          className="image-container"
          style={{
            width: imageSize.width,
          }}
        >
          <ImgWithText
            imageUrl={image.imageUrl_front}
            initialTexts={image.initialTexts}
            initialTextPositions={image.textPositions}
            onClickText={handleSelectedText}
          />
        </div>
      </Layout>
    </>
  );
};

export default LastPage;
