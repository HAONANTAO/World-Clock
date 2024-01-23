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
  background-color: ${(props)=>{props.theme.light?props.theme.clockBackground.}}rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  padding: 2rem;
  margin: 2rem;
`;
const Clock = (props) => {
  //确定时间状态
  //const [time, setTime] = useState(new Date());

  //城市和时区
  const { city, timezone } = props;
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
    const currentTime = new Date();

    //有时区的时差
    const offset = timezone * 60 * 60 * 1000;
    const timeWithOffset = new Date(currentTime.getTime() + offset);

    setYear(timeWithOffset.getUTCFullYear());
    //从0开始，要+1
    setMonth(timeWithOffset.getUTCMonth() + 1);
    setDay(timeWithOffset.getUTCDate());
    setHour(timeWithOffset.getUTCHours());
    setMinute(timeWithOffset.getUTCMinutes());
    setSecond(timeWithOffset.getUTCSeconds());
  };

  //确定心跳，多长时间进行一次时间的更新
  useEffect(() => {
    setTime();
    const interval = setInterval(() => {
      setTime();
    }, 200);
    return () => clearInterval(interval);
  }, []);

  //算黑夜还是白天
  useEffect(() => {
    //早上6点到晚上6点之间为白天
    if (hour >= 6 && hour < 18) {
      setLight(true);
    } else {
      setLight(false);
    }
  }, [hour]);

  //  <--按照城市名字，表盘，时间显示的顺序从上到下显示*/
  return (
    <ClockStyle light={light}>
      <City light={light}>{city}</City>
      <Pointer light={light}>Pointer</Pointer>
      <Time light={light}>
        {year}-{month}-{day} {hour}:{minute}:{second}
      </Time>
    </ClockStyle>
  );
};

export default Clock;
