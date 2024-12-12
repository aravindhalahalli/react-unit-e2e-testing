import { useEffect } from "react";
import { useState } from "react";

const Waiter = () => {
  const [waiter, setWaiter] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setWaiter("passed");
    }, 2000);
  }, []);
  return <div data-testid="waiter">{waiter}</div>;
};

export default Waiter;
