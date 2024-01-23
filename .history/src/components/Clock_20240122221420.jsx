import React, { useState, useEffect } from "react";
import styled from "styled-components";
import City from "./City";
import Pointer from "./Pointer";
import Time from "./Time";

const ClockStyle = styled.div`
  width: 400px;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  padding: 2rem;
  margin: 2rem;
`;
const Clock = (props) => {
  //确定时间状态
  //const [time, setTime] = useState(new Date());

  //年月日时分秒
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  //黑白状态表盘
  const [light, setLight] = useState(true);

  //时间函数
  const setTime = () => {
    //当前时间
    let currentTime = new Date();

    let timeWithOffset = new Date(
      currentTime.getTime() + timezone * 60 * 60 * 1000,
    );
  };
  useEffect;

  //城市和时区
  const { city, timezone } = props;
  //  <--按照城市名字，表盘，时间显示的顺序从上到下显示*/
  return (
    <ClockStyle>
      <City>{city}</City>
      <Pointer>Pointer</Pointer>
      <Time>{timezone}</Time>
    </ClockStyle>
  );
};

export default Clock;
