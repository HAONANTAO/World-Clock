import React from "react";
import styled from "styled-components";

const PointerStyle = styled.div`
  //padding: 1rem;
  margin-bottom: 1rem;
  color: ${(props) =>
    props.light ? props.theme.color.light : props.theme.color.dark};
`;
PointerStyle.defaultProps = {
  size: "250px",
  white: "#fff",
  black: "#091921",
  $light: true,
  bg_white: "url(src/images/clock_white.png)",
  bg_black: "url(src/images/clock_black.png)",

  bg_white_box_shadow:
    "inset 0 0 30px rgba(0, 0, 0, 0.1), 0 20px 20px rgba(0, 0, 0, 0.2), 0 0 0 4px rgba(255, 255, 255, 1)",
  bg_black_box_shadow:
    "inset 0 0 30px rgba(255, 255, 255, 0.1), 0 20px 20px rgba(0, 0, 0, 0.5), 0 0 0 4px #091921",
};

const Pointer = (props) => {
  const { light, children } = props;
  return <PointerStyle light={light}>{children}</PointerStyle>;
};

export default Pointer;
