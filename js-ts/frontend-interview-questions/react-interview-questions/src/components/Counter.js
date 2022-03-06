import "../App.css";
import { useState, useReducer } from "react";
// <========== Create a counter ==========>
// useReducer to set counter
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
const initialState = {
  count: 0,
};
export default function ReactCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [counter, setCounter] = useState(0);
  const counterAdd = () => {
    setCounter(counter + 1);
  };

  const counterMinus = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="counterbox">
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
    </div>
  );
}
