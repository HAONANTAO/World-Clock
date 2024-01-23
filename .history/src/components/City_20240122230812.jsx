import React from "react";
import styled from "styled-components";

//默认参数
CityStyle.defaultProps = { marginBottom: "2rem" };

const CityStyle = styled.div`
  margin-bottom: ${(props) => {
    props.marginBottom;
  }};
  color: ${(props) =>
    props.light ? props.theme.color.light : props.theme.color.dark};
`;

const City = (props) => {
  const { light, children } = props;
  return <CityStyle light={light}>{children}</CityStyle>;
};

export default City;
