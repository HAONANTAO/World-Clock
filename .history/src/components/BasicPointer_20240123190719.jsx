import React from "react";
import styled from "styled-components";

//attrs是用来应对动态的
const BasicPointerStyle = styled.attrs((props) => ({
  style: {
    transform: `rotateZ(${props.angle}deg)`,
  },
}))`
display:flex;
justify-content: center;
position: absolute;
border-radius: 50%;
width: ${(props) => props.size}px;
aspect-ratio: 1/1;
z-index:
`;
const BasicPointer = () => {
  return <div></div>;
};

export default BasicPointer;
