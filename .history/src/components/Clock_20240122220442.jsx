import React from "react";
import styled from "styled-components";
import City from "./City";
import Pointer from "./Pointer";
import Time from "./Time";

const ClockStyle = styled.div`
  width: 400px;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  padding: 2rem;
  margin: 2rem;
`;
const Clock = (props) => {

  const [] = React.useState();

  //城市和时区
  const { city, timezone } = props;
  //  <--按照城市名字，表盘，时间显示的顺序从上到下显示*/
  return (
    <ClockStyle>
      <City>{city}</City>
      <Pointer>Pointer</Pointer>
      <Time>{timezone}</Time>
    </ClockStyle>
  );
};

export default Clock;
