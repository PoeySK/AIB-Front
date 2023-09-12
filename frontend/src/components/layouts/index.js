import React from "react";
import { TopMenu } from "./topMenu/index";
import { Sidebar } from "./sideMenu/index";

export const Layout = (props) => {
    return (
        <>
            <TopMenu />
            <Sidebar />
            <main>
                {props.children}
            </main>
        </>
    )
}