import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//css in js
import styled, { createGlobalStyle } from "styled-components";
//可以直接调用
//页面点击option左键，直接定位code
import { ClickToComponent } from "click-to-react-component";

//给一个styled全局变量
const GlobalStyle = createGlobalStyle`
`;

const theme ={
  
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ClickToComponent />
  </React.StrictMode>,
);