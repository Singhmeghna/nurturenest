import React, { useState, useEffect } from "react";

const FULL_DASH_ARRAY = 283;
const RESET_DASH_ARRAY = `-57 ${FULL_DASH_ARRAY}`;

const Timer = () => {
  const [timePassed, setTimePassed] = useState(-1);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerInterval, setTimerInterval] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const start = (withReset = false) => {
    if (withReset) {
      reset();
    }
    setIsRunning(true);
    startTimer();
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(timerInterval);
  };

  const reset = () => {
    setTimePassed(-1);
    setTimeLeft(30);
    setIsRunning(false);
    clearInterval(timerInterval);
  };

  const startTimer = () => {
    setTimerInterval(
      setInterval(() => {
        const newTimePassed = timePassed + 1;
        const newTimeLeft = 30 - newTimePassed;
        setTimePassed(newTimePassed);
        setTimeLeft(newTimeLeft);

        if (newTimeLeft === 0) {
          timeIsUp();
        }
      }, 1000)
    );
  };

  const timeIsUp = () => {
    const confirmReset = window.confirm("Time is UP! Wanna restart?");
    if (confirmReset) {
      reset();
      startTimer();
    } else {
      reset();
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  };

  const calculateTimeFraction = () => {
    const rawTimeFraction = timeLeft / 30;
    return rawTimeFraction - (1 / 30) * (1 - rawTimeFraction);
  };

  const setCircleDasharray = () => {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    const element = document.getElementById("base-timer-path-remaining");
    if (element) {
      element.setAttribute("stroke-dasharray", circleDasharray);
    }
  };

  useEffect(() => {
    if (isRunning) {
      startTimer();
    }
  }, [isRunning]);

  useEffect(() => {
    setCircleDasharray();
  }, [timeLeft]);

  return (
    <div className="base-timer">
      <svg
        className="base-timer__svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="base-timer__circle">
          <circle
            className="base-timer__path-elapsed"
            cx="50"
            cy="50"
            r="45"
          ></circle>
          <path
            id="base-timer-path-remaining"
            strokeDasharray={FULL_DASH_ARRAY}
            className="base-timer__path-remaining arc"
            d="
               M 50, 50
               m -45, 0
               a 45,45 0 1,0 90,0
               a 45,45 0 1,0 -90,0
               "
          ></path>
        </g>
      </svg>
      <span id="base-timer-label" className="base-timer__label">
        {formatTime(timeLeft)}
      </span>
      <div className="buttons">
        <button
          onClick={() => start(false)}
          className="start"
          disabled={isRunning}
        >
          Start
        </button>
        <button onClick={stop} className="stop" disabled={!isRunning}>
          Stop
        </button>
        <button onClick={reset} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
