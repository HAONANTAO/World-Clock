import React, { Children } from "react";
import styled from "styled-components";

const TimeStyled = styled.div;

const Time = (props) => {
  const { light, children } = props;
  //在这里收到参数，进行白天黑夜的判断

  return <div>{children}</div>;
};

export default Time;
