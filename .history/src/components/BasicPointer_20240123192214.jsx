import React from "react";
import styled from "styled-components";

//attrs是用来应对动态的
const BasicPointer = styled.attrs((props) => ({
  style: {
    transform: `rotateZ(${props.angle}deg)`,
  },
}))`
display:flex;
justify-content: center;
position: absolute;
border-radius: 50%;
width: ${(props) => props.block_size}px;
aspect-ratio: 1/1;
z-index:${(props) => props.z_index};

::before{
  content:"";
  width:${(props) => props.pointer_width}px;
  height:${(props) => `calc(${props.block_size / 2}+${props.tail})`}px;
  background:${(props) =>
    props.light ? props.pointer_light : props.pointer_dark};
    border-radius:${(props) => props.pointer_radius}

}
`;

BasicPointer.defaultProps = {
  light: true,
  block_size: 100,
  tails: 0,
  pointer_light: "#ff6767",
  pointer_dark: "#69c0ff",
  pointer_radius: "6px 6px 3px 3px",
  pointer_width: 4,
  z_index: 0,
  angle:
};

export default BasicPointer;
