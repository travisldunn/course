import React, { useState } from "react";

const UseState = () => {
  //   const [counter, setCounter] = useState(() => exspensiveInistialState());
  const [{ count1, count2 }, setCount] = useState({ count1: 0, count2: 0 });

  return (
    <div className="usestate">
      <button
        onClick={() =>
          setCount((currentState) => ({
            ...currentState,
            count1: currentState.count1 + 1,
          }))
        }
      >
        1
      </button>
      <button
        onClick={() =>
          setCount((currentState) => ({
            ...currentState,
            count2: currentState.count2 + 1,
          }))
        }
      >
        2
      </button>
      <h1>{count1}</h1>
      <h1>{count2}</h1>
    </div>
  );
};

export default UseState;
