import React from "react";
import styled from "styled-components";

const CityStyle = styled.div`
  margin-bottom: ${props.marginBottom=>{props.marginBottom}};
`;

CityStyle.defaultProps = { marginBottom: "2rem" };

const City = (props) => {
  const { light, children } = props;
  return <CityStyle light={light}>{children}</CityStyle>;
};

export default City;
