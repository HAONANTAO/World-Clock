import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
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

      font-family: 'Orbitron', sans-serif ;
    }


`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ClickToComponent />
  </React.StrictMode>,
);
