import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function restart() {
    setCount(count = 0)
  }

  return (
    <>
      <div id='Cen'>
        <h1>Welcome to the online clicker!</h1>
        <p>{count} USDC</p>
        <button onClick={handleClick} id='b1'>Click!</button>
        <button onClick={restart} id='b2'>Restart!</button>
        <p></p>
        <a>https://www.bitcoin.com/</a>
      </div>
    </>
  );
}

export default App;