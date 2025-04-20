"use client";

import { useState } from "react";

export const metadata = {
  title: "Counter",
};

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Counter</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <p>{count}</p>
    </>
  );
};
