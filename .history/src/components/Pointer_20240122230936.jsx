import React from "react";
import styled from "styled-components";

const PointerStyle = styled.div``;

const Pointer = (props) => {
  const { light, children } = props;
  return <div>{children}</div>;
};

export default Pointer;
