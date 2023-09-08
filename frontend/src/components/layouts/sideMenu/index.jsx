import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { TabList } from "../../tabs";
import { ColorModify } from "../../tabs/color/index";
import { Gradation } from "../../tabs/gradation/index";

export const Sidebar = () => {
  const tabId = useSelector(state => state.tabId);

  return (
    <div className="sidebar">
      <div className="content">
        <h2>색상</h2>
        <div>
          <TabList />
        </div>
        <div>
          {tabId === 'color' ? <ColorModify /> : <Gradation />}
        </div>
      </div>
    </div>
  );
};
