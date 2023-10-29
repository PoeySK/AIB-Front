import React, { useEffect, useState } from "react";
import "./index.css";
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
        </div>
      </Layout>
    </>
  );
};

export default LastPage;
