import React, { useTheme } from "react";
import styled, { useTheme } from "styled-components";

const TimeStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
  color: ${(light, theme) => {
    return theme.color.light;
  }};
`;

const Time = (props) => {
  const theme = useTheme(); // 使用 useTheme 钩子获取主题
  const { light, children } = props;
  //在这里收到参数，进行白天黑夜的判断

  return <TimeStyle light={light}>{children}</TimeStyle>;
};

export default Time;
