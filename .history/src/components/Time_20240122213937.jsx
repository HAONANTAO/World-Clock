import React from "react";

const Time = (props) => {
  const { city,timezone } = props;
  return <div>{timezone}</div>;
};

export default Time;
