import { useState } from "react";

function useCustomCounterHook(initialCounter) {
  const [counter, setCounter] = useState(initialCounter);

  const incCounter = () => {
    return counter < 50 ? setCounter(counter + 1) : counter;
  }

  const decCounter = () => {
    return counter > -50 ? setCounter(counter - 1) : counter;
  }

  const rndCounter = () => {
    return setCounter(Math.floor(Math.random() * (50 - (-50) + 1) + (-50)));
  }

  const resetCounter = () => {
    return setCounter(initialCounter);
  }

  return { incCounter, decCounter, rndCounter, resetCounter, counter };
}

export default useCustomCounterHook;
