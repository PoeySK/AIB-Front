import React, { useState } from "react";
import "./index.css";
import { ImgWithEditableText } from "../../components/imgWithText";
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
      { text: "AIB Project\n 末!!!", fontSize: 18, fontFamily: "Arial" },
      {
        text: "언제 이 프로젝트가\n끝날까...?",
        fontSize: 20,
        fontFamily: "Arial",
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

  const handleSelectedText = (newText) => {
    setSelectedText(newText);
    console.log("실행!\n", selectedText);
  };

  return (
    <>
      <Layout selectedText={selectedText}>
        <div
          className="image-container"
          style={{
            width: imageSize.width,
          }}
        >
          <ImgWithEditableText
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
