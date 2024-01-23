import React from "react";
import styled from "styled-components";

const ClockCenterStyle = styled.div`
  width: ${(props) => props.size};
  aspect-ratio: 1/1;
  background: ${(props) => props.bg};
  border: ${(props) => props.border};
  border-radius: 50%;
  z-index: 1;
`;
ClockCenterStyle.defaultProps = {
  size: "15px",
  bg: "#848484",
  border: "2px solid #fff",
};
const PointerCenter = (props) => {
  return <ClockCenterStyle {...props}></ClockCenterStyle>;
};

export default PointerCenter;
