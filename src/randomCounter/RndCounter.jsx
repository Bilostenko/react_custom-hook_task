import React from "react";
import useCustomCounterHook from "../useCustomCounterHook";
import "./rndCounter.css"

const RndCounter = (props) => {

  const { rndCounter, resetCounter, counter } = useCustomCounterHook(props.counter);

  return (
    <div className="component">
      <div className="counter">{counter}</div>
      <div className="controls">
        <button onClick={rndCounter}>RND</button>
        <button onClick={resetCounter}>RESET</button>
      </div>
    </div>
  )
}

export default RndCounter