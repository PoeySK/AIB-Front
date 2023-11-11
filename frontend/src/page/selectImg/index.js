import React, { useState } from "react";
import "./index.css";
import { TopMenu } from "../../components/layouts/topMenu";

const testImage = [
  "pick.jpeg", "realTestImg.jpeg", "testImgJpeg.jpeg"
]

const SelectPage = () => {
  const [isCheck, setIsCheck] = useState([false, false, false]);
  const handleSelectImage = (index) => {
    console.log("sp:", isCheck);
    const newIsCheck = Array(3).fill(false);
    newIsCheck[index] = true;
    setIsCheck(newIsCheck);
  };

  const handleClickButton = () => {
    // 선택한 이미지 last page로 넘겨주기
  }

  return (
    <div>
      <TopMenu />
      <div id="select-container">
        <div id="text-area">
          <h1>Web Banner</h1>
          <p>마음에 드는 웹 배너를 골라주세요.</p>
        </div>
        {testImage.map((v, i) => (
          <div
            key={i}
            className={isCheck[i] ? "selected-image" : "select-image"}
            onClick={() => handleSelectImage(i)}
          >
            <img
              src={testImage[i]}
            />
          </div>
        ))}
      </div>
      <div id="button-area">
        <button id="select-button" onClick={handleClickButton}>선택 완료</button>
      </div>

    </div>
  );
};

export default SelectPage;
