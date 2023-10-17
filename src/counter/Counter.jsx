import React from "react";
import "./counter.css";

import useCustomCounterHook from "./../useCustomCounterHook";

const Counter = (props) => {
  const { incCounter, decCounter, rndCounter, resetCounter, counter } = useCustomCounterHook(props.counter);

  return (
    <div className="component">
      <div className="counter">{counter}</div>
      <div className="controls">
        <button onClick={incCounter}>INC</button>
        <button onClick={decCounter}>DEC</button>
        <button onClick={rndCounter}>RND</button>
        <button onClick={resetCounter}>RESET</button>
      </div>
    </div>
  )
}

export default Counter;
