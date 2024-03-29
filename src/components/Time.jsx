import React from "react";
import styled, { useTheme } from "styled-components";

const TimeStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
  //直接用props里面的theme进行
  color: ${(props) =>
    props.light ? props.theme.color.light : props.theme.color.dark};
`;

const Time = (props) => {
  const { light, children } = props;
  //在这里收到参数，进行白天黑夜的判断

  return <TimeStyle light={light}>{children}</TimeStyle>;
};

export default Time;
