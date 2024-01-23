import React from "react";

//css in js
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

//import ClockGroup from "./components/ClockGroup";
import Clock from "./components/Clock";

//主题设定
//要把这里的光暗模式theme传给time组件，ThemeProvider
const theme = {
  primary: "#69c0ff",
  secondary: "#b7eb8f",
  color: {
    dark: "#333",
    light: "#eee",
  },
  clockBackground: {
    dark: rgba(255, 255, 255, 0.1),
    light: rgba(255, 255, 255, 0.9),
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
      font-size:2rem;
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
//代替组件clockgroup
const ClockGroupStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //空间不足时， 可以换行
  flex-wrap: wrap;
  max-width: 1200px;
`;
//标准时间是+10，夏令时+11 墨尔本
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ClockGroupStyle>
          <Clock city="Melbourne" timezone={10} />
          <Clock city="China" timezone={8} />
          <Clock city="London" timezone={1} />
          <Clock city="New York" timezone={-4} />
        </ClockGroupStyle>
      </ThemeProvider>
    </>
  );
};

export default App;
