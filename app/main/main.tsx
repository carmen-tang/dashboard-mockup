import React, { useState } from 'react';

interface ComponentProps {
  initialValue?: number;
}

const Main: React.FC<ComponentProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState<number>(initialValue);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Main;