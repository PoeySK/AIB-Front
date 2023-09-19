import React from "react";
import { TopMenu } from "./topMenu/index";
import { Sidebar } from "./sideMenu/index";

export const Layout = (props, { selectedText }) => {
  console.log("Layout selectedText:", selectedText);
  return (
    <>
      <TopMenu />
      <main>{props.children}</main>
      <Sidebar selectedText={selectedText} />
    </>
  );
};
