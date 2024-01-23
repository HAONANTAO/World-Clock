import React from "react";
import styled from "styled-components";

const PointerStyle = styled.div`
  color: ${(props) =>
    props.light ? props.theme.color.light : props.theme.color.dark};
`;

const Pointer = (props) => {
  const { light, children } = props;
  return <PointerStyle>{children}</PointerStyle>;
};

export default Pointer;
