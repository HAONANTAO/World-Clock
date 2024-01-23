import React from "react";
import styled from "styled-components";

const CityStyle = styled.div`
  margin-bottom: 2rem
  color: ${(props) =>
    props.light ? props.theme.color.light : props.theme.color.dark};
`;
//默认参数
//CityStyle.defaultProps = { marginBottom: "2rem" };

const City = (props) => {
  const { light, children } = props;
  return <CityStyle light={light}>{children}</CityStyle>;
};

export default City;
