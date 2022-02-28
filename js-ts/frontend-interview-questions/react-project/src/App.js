import { useState, useEffect } from "react";
import "./App.css";

// delays a function from happening immediately
const myDebounce = (cb, d) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

function App() {
  const [counter, setCounter] = useState(0);
  const handleChange = myDebounce((e) => {
    console.log(e.target.value);
  }, 1000);

  const counterHandler = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div className="App">
      <div className="box">
        <p className="p">Counter</p>
        <p className="p">{counter}</p>
        <button onClick={counterHandler} className="p">
          Add +1
        </button>
      </div>
      <div className="box">
        <p className="p">Input with Debounce</p>
        <input onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
