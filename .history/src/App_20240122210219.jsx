import React from "react";

//css in js
import styled, { createGlobalStyle } from "styled-components";

import ClockGroup from "./components/ClockGroup";

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

//给一个styled全局变量，基础设置
const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 10px;
    }
    body{
      display:flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      width: 100vw;
      text-shadow: 0 3px 5px ,rgba(0,0,0/10%);
      font-family: 'Orbitron', sans-serif ;
      font-size:1.2rem;
      background-image:${backgroundImage};
    }
    *,*::before,*::after{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      list-style: none;
      user-select: none;
      -webkit-user-drag:none;
      
    }


`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      Hello world
    </>
  );
};

export default App;
