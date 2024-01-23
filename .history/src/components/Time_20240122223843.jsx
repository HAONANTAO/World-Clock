import React from "react";
import styled from "styled-components";

const TimeStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 0rem;
`;

const Time = (props) => {
  const { light, children } = props;
  //在这里收到参数，进行白天黑夜的判断

  return <TimeStyle>{children}</TimeStyle>;
};

export default Time;