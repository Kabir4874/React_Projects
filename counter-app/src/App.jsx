import { useState } from "react";
import "./index.css";
function App() {
  const [count, setCount] = useState(0);
  function decreaseHandler() {
    setCount(count - 1);
  }
  function increaseHandler() {
    setCount(count + 1);
  }
  return (
    <>
      <div className=" w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
        <div className=" text-[#0398d4] text-2xl font-medium">
          Increment & Decrement
        </div>
        <div className=" flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
          <button onClick={decreaseHandler}>-</button>
          <div>{count}</div>
          <button onClick={increaseHandler}>+</button>
        </div>
        <button>Reset</button>
      </div>
    </>
  );
}

export default App;
