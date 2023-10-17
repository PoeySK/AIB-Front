import React from "react";
import { TopMenu } from "./topMenu/index";
import { Sidebar } from "./sideMenu/index";

export const Layout = (props) => {
  const { selectedText } = props;
  console.log("laoyt", props);
  return (
    <>
      <TopMenu />
      <main>{props.children}</main>
      <Sidebar selectedText={selectedText} getFontFamily={props.getFontFamily} />
    </>
  );
};
