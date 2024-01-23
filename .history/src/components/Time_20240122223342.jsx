import React, { Children } from "react";
import styl
const Time = (props) => {
  const { light, children } = props;
  //在这里收到参数，进行白天黑夜的判断

  return <div>{children}</div>;
};

export default Time;
