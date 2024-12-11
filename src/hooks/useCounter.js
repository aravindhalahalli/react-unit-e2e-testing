import { useState } from "react";

const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);
  const incrementCounter = () => {
    setCount((prev) => prev + 1);
  };
  return { count, incrementCounter };
};

export default useCounter;
