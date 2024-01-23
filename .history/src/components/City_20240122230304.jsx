import React from "react";
import styled from "styled-components";

const CityStyle = styled.div`
`;
const City = (props) => {
  const { light, children } = props;
  return <div light={light}>{children}</div>;
};

export default City;
