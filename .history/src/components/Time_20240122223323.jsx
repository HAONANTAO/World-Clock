import React, { Children } from "react";

const Time = (props) => {
  //在这里收到参数，进行白天黑夜的判断
  const { light, children } = props;
  return <div>{children}</div>;
};

export default Time;
