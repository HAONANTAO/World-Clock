import React from "react";
import styled from "styled-components";

const ClockGroupStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const ClockGroup = (props) => {
  const { children, ...rest } = props;
  return;
  <ClockGroupStyle {...rest} />;
};

export default ClockGroup;
