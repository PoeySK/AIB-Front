import React, { useState } from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { TabList } from "../../tabs";
import { ColorModify } from "../../tabs/colorModify/index";
import { TextModify } from "../../tabs/textModify/index";
import { TextBox } from "../../textBox/index";

export const Sidebar = () => {
  const tabId = useSelector((state) => state.tabId);
  const [seletedText, setSeletedText] = useState("");

  const handleTextSelection = (text) => {
    setSeletedText(text);
  }

  return (
    <div className="sidebar">
      <h2>메뉴</h2>
      <TextBox seletedText={seletedText} handleTextSelection={handleTextSelection} />
      <div className="content">
        <TabList />
        <div>{tabId === "colorModify" ? <ColorModify /> : <TextModify />}</div>
      </div>
    </div>
  );
};
