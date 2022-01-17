import React, { useState, useEffect } from "react";
import { Fragment } from "react";

export default function DoroTimer() {
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(5);
  const [displayText, setDisplayText] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayText ? 60 : 20;
          let seconds = 59;
          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayText(!displayText);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          {displayText && <div> Break time!!</div>}
          <div className="timer-clock">{timerMinutes}:{timerSeconds}</div>
        </section>
      </section>
    </Fragment>
  );
}
