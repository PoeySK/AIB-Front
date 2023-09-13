import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { TabList } from "../../tabs";
import { ColorModify } from "../../tabs/colorModify/index";
import { TextModify } from "../../tabs/textModify/index";

export const Sidebar = () => {
  const tabId = useSelector((state) => state.tabId);

  return (
    <div className="sidebar">
      <h2>메뉴</h2>
      <div className="content">
        <TabList />
        <div>{tabId === "colorModify" ? <ColorModify /> : <TextModify />}</div>
      </div>
    </div>
  );
};
