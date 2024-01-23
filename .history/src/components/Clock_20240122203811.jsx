import React from "react";
import styled from "styled-components";
import City from "./City";


const ClockStyle = styled.div``;

const Clock = (props) => {
  //城市和时区
  const { city, timezone } = props;
  return <ClockStyle>
      <City></City>
      <Pointer></Pointer>
  </ClockStyle>;
};

export default Clock;
