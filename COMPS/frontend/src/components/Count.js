import { useState } from 'react';

export default function MyButton() {
  const [count, setCount] = useState(10);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
        ❤️ {count} 
    </button>
  );
}