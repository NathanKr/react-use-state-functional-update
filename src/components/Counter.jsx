import { useState } from "react";

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <p>the update function here is : prevCount ={">"} prevCount - 1</p> 
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <p>the update function here is : prevCount ={">"} prevCount + 1</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <p>count : {count}</p>
    </>
  );
}

export default Counter;
