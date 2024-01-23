import React from "react";
import styled from "styled-components";

const ClockCenterStyle = styled.div`
  width: ${(props) => props.size};
  aspect-ratio: 1/1;
  background: ${props=>props.bg};
  border:${props=>props.bor}
`;
const PointerCenter = () => {
  return <div></div>;
};

export default PointerCenter;
