import React from "react";
import styled from "styled-components";
import City from "./City";
import Pointer from "./Pointer";
import Time from "./Time";

const ClockStyle = styled.div`
  width: ${(props) => props.size};
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255.255.255.0.1);
  border-radius: 2rem;
  padding: 2rem;
  margin: 2rem;
`;
const Clock = (props) => {
  //城市和时区
  const { city, timezone } = props;
  return (
    <ClockStyle size="400px">
      <City>{city}</City>
      <Pointer>Pointer</Pointer>
      <Time>{timezone}</Time>
    </ClockStyle>
  );
};

export default Clock;