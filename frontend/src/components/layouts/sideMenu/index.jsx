import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { TabList } from "../../tabs";
import { ColorModify } from "../../tabs/color/index";
import { Font } from "../../tabs/font/index";

export const Sidebar = () => {
  const tabId = useSelector((state) => state.tabId);

  return (
    <div className="sidebar">
      <h2>메뉴</h2>
      <div className="content">
        <div>
          <TabList />
        </div>
        <div>{tabId === "color" ? <ColorModify /> : <Font />}</div>
      </div>
    </div>
  );
};
