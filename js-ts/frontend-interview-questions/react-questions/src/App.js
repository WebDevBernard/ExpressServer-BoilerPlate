import { useState, useEffect, useReducer } from "react";
import "./App.css";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

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
  const [state, dispatch] = useReducer(reducer, initialState);
  const [counter, setCounter] = useState(0);
  const handleChange = myDebounce((e) => {
    console.log(e.target.value);
  }, 1000);

  const counterAdd = () => {
    setCounter(counter + 1);
  };

  const counterMinus = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    console.log("useState:", counter);
    console.log("useReducer:", state.count);
  }, [counter, state.count]);

  return (
    <div className="App">
      <div className="box">
        <p className="p">Counter with useState</p>
        <p className="p">Count: {counter}</p>
        <div className="inner">
          <button onClick={counterMinus} className="button">
            -1
          </button>
          <button onClick={counterAdd} className="button">
            +1
          </button>
        </div>
      </div>
      <div className="box">
        <p className="p">Counter with useReducer</p>
        <p className="p">Count: {state.count}</p>
        <div className="inner">
          <button
            onClick={() => dispatch({ type: "DECREMENT" })}
            className="button"
          >
            -1
          </button>
          <button
            onClick={() => dispatch({ type: "INCREMENT" })}
            className="button"
          >
            +1
          </button>
        </div>
      </div>
      <div className="box">
        <p className="p">Input with Debounce</p>
        <input onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
