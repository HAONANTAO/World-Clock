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


BasicPointerStyle.defaultProps ={
  light:true,
  size:100,
  tails:0,
  pointer_widtr
}
const BasicPointer = () => {
  return <div></div>;
};

export default BasicPointer;
