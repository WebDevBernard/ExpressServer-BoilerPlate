import { useState } from "react";
import "./App.css";

const Square = ({ num }) => {
  const [turn, setTurn] = useState("x");
  const handleClick = (num) => {
    if (turn === "x") {
      setTurn("o");
    } else {
      setTurn("x");
    }
  };
  return <td onClick={() => handleClick(num)}>-</td>;
};

const Board = () => {
  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <Square />
            <Square />
            <Square />
          </tr>
          <tr>
            <Square />
            <Square />
            <Square />
          </tr>
          <tr>
            <Square />
            <Square />
            <Square />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
