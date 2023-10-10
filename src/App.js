import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import useTitle from './useTitle';

function App() {
  const [count, setCount] = useState(0);

  useTitle(`You clicked ${count} times`);

  return (
      <>
          <p>Counter = {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
      </>
  )
}

export default App;
