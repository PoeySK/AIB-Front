import React, { useEffect, useState } from "react";
import "./index.css";
import { ImgWithText } from "../../components/imgWithText";
import { Layout } from "../../components/layouts";
import { fetchData, getData } from "../../data/imgData";
import { ImageAndText } from "../../components/ImageAndText";

const LastPage = () => {
  // useEffect(() => { // data 비동기 로드
  //   fetchData();
  // }, []);

  // const imgData = getData();
  const realTestImage = {
    imageBase64: "./realTestImg.jpeg",
    texts: ["무더운 여름", "떠나자 해변으로"],
    positions: [{ x: 510, y: 200 }, { x: 510, y: 300 }],
    fontSize: [30, 55],
    kerning: [0.1, 0.2],
    alignment: "left",
    textColor: "#000000"
  }

  /* ---------------------Test Data------------------- */
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
        fontFamily: "Courier New",
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
  /* ------------------------------------------------ */

  const imageSize = { width: "100%", height: "100%" };
  const [selectedText, setSelectedText] = useState("");

  const handleSelectedText = (newText) => {
    setSelectedText(newText);
  };

  return (
    <>
      <Layout
        selectedText={selectedText}
      >
        <div
          className="image-container"
          style={{
            width: imageSize.width,
          }}
        >
          <ImageAndText
            realTestImage={realTestImage}
            onClick={handleSelectedText}
          />
          {/* <ImgWithText
            imageUrl={image.imageUrl_front}
            initialTexts={image.initialTexts}
            initialTextPositions={image.textPositions}
            onClickText={handleSelectedText}
          /> */}
        </div>
      </Layout>
    </>
  );
};

export default LastPage;
