import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((prevcounter) => prevcounter + 1)
    setCounter((prevcounter) => prevcounter + 1)
    setCounter((prevcounter) => prevcounter + 1)
    setCounter((prevcounter) => prevcounter + 1)
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
    <div className="App-header">
      <h1>Here are the counter</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>
        Add value{counter}
      </button>

      <button onClick={removeValue}>
        Remove value{counter}
      </button>
      </div>
    </>
  );
}

export default App;
