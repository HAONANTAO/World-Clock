import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//css in js
import styled, { createGlobalStyle } from "styled-components";
//可以直接调用
//页面点击option左键，直接定位code
import { ClickToComponent } from "click-to-react-component";

//主题设定
const theme = {
  primary: "#69c0ff",
  secondary: "#b7eb8f",
  color: {
    dark: "#333",
    light: "#eee",
  },
};

//背景渐变，从左上角到右下角 0-100%
const backgroundImage = `
linear-gradient(to bottom right,${theme.primary} 0%,${theme.secondary} 100%)`;

//给一个styled全局变量
const GlobalStyle = createGlobalStyle`
    body{
      display:flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      width: 100vw;
      text-shadow: 0 3px 5px ,rgba(0,0,0/10%);
      font-family: 'Orbitron', sans-serif ;
      font-size:1.2rem;

    }


`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ClickToComponent />
  </React.StrictMode>,
);
