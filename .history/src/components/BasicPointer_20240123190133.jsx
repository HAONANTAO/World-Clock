import React from "react";
import styled from "styled-components";

//attrs是用来应对动态的
const BasicPointerStyle = styled.attrs((props) => (
  {
      style:{
        transform:`rotateZ`
      }



}
));
const BasicPointer = () => {
  return <div></div>;
};

export default BasicPointer;
