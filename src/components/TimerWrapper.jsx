import { useEffect, useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/timer.css";

// TimerWrapper component is a timer that can be started, stopped and reset
const TimerWrapper = () => {
  // Controls if the timer is running or not
  const [isRunning, setIsRunning] = useState(false);

  // Seconds, minutes and hours of the timer
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  // The interval ID
  const timer = useRef();

  // Reset the timer. Set seconds, minutes and hours to 0. Stop the timer
  const restart = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    stop();
  };

  // Stop the timer. Clear the interval and set isRunning to false
  const stop = () => {
    clearInterval(timer.current);
    timer.current = null;
    setIsRunning(false);
  };

  // Start the timer. Set up an interval to increment the seconds, minutes and hours every second. Set isRunning to true
  const start = () => {
    timer.current = setInterval(() => {
      setSeconds((seconds) => {
        if (seconds === 59) {
          setMinutes((minutes) => {
            if (minutes === 59) {
              setHours((hours) => hours + 1);
              return 0;
            }
            return minutes + 1;
          });
          return 0;
        }
        return seconds + 1;
      });
    }, 1000);
    setIsRunning(true);
  };

  // Start or stop the timer based on the current state
  useEffect(() => {
    if (isRunning && !timer.current) {
      start();
    } else if (!isRunning && timer.current) {
      stop();
    }
  }, [isRunning]);

  return (
    <div className="app-wrapper">
      <h1>Work Timer</h1>
      <h1 className="timer">
        {hours < 10 ? "0" + hours : hours} :{" "}
        {minutes < 10 ? "0" + minutes : minutes} :{" "}
        {seconds < 10 ? "0" + seconds : seconds}
      </h1>
      <div className="timer-btn-wrapper">
        <button className="timer-btn" onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
        <button className="timer-btn" onClick={restart}>
          <FontAwesomeIcon icon={faArrowsRotate} />
        </button>
      </div>
    </div>
  );
};

export default TimerWrapper;
