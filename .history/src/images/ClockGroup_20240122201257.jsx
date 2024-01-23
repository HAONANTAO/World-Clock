import React from "react";
import styled from "styled-components";

//表盘显示组件

const ClockGroupStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //空间不足时， 可以换行 
  flex-wrap: wrap;
`;

const ClockGroup = (props) => {
  const { children, ...rest } = props;
  return;
  <ClockGroupStyle {...rest} />;
};

export default ClockGroup;
