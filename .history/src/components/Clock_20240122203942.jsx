import React from "react";
import styled from "styled-components";
import City from "./City";
import Pointer from "./Pointer";
import Time


from "./Time";
const ClockStyle = styled.div``;

const Clock = (props) => {
  //城市和时区
  const { city, timezone } = props;
  return (
    <ClockStyle>
      <City></City>
      <Pointer></Pointer>
      <Time></Time>
    </ClockStyle>
  );
};

export default Clock;
