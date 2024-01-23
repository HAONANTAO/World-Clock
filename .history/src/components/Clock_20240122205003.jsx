import React from "react";
import styled from "styled-components";
import City from "./City";
import Pointer from "./Pointer";
import Time from "./Time";

const ClockStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Clock = (props) => {
  //城市和时区
  const { city, timezone } = props;
  return (
    <ClockStyle>
      // 按照城市名字，表盘，时间显示的顺序从上到下显示
      <City>{city}</City>
      <Pointer>Pointer</Pointer>
      <Time>{timezone}</Time>
    </ClockStyle>
  );
};

export default Clock;
