import React, { Children } from "react";

const Time = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Time;
