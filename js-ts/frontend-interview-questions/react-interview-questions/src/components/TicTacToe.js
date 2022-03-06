import { useState, useEffect } from "react";
const style = {
  square: {
    width: "100px",
    height: "100px",
    fontSize: "5rem",
    color: "#E8E5E5",
    border: "solid 1px black",
  },
  square_o: {
    backgroundColor: "ForestGreen",
    width: "100px",
    height: "100px",
    fontSize: "5rem",
    color: "#E8E5E5",
    border: "solid 1px black",
  },
  square_x: {
    backgroundColor: "FireBrick",
    width: "100px",
    height: "100px",
    fontSize: "5rem",
    color: "#E8E5E5",
    border: "solid 1px black",
  },
  grid: {
    display: "grid",
    gridGap: "2px",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  p: {
    margin: "auto",
    fontWeight: "bold",
  },
  reset: {
    fontWeight: "bold",
    fontSize: "16px",
    backgroundColor: "lightGrey",
    borderRadius: "6px",
    padding: "8px",
    cursor: "pointer",
  },
  header: {
    display: "grid",
  },
};

const Square = ({ value, onClick, winner }) => {
  if (!value) {
    return <button style={style.square} onClick={onClick} disabled={winner} />;
  }
  return (
    <button style={value === "X" ? style.square_x : style.square_o} disabled>
      {value}
    </button>
  );
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState(null);

  const setSquareValue = (index) => {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const reset = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
  };

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  useEffect(() => {
    const w = calculateWinner(squares);
    if (w) {
      setWinner(w);
    }
    if (!w && !squares.filter((square) => !square).length) {
      setWinner("BOTH");
    }
  });

  return (
    <div className="box">
      <p className="p">TicTacToe</p>
      <div style={style.header}>
        {!winner && <p style={style.p}>Turn: {currentPlayer}</p>}
        {winner && winner !== "BOTH" && <p style={style.p}>Winner: {winner}</p>}
        {winner && winner === "BOTH" && <p style={style.p}>Try Again!</p>}
        <button style={style.reset} onClick={reset}>
          Reset
        </button>
      </div>
      <div style={style.grid}>
        {Array(9)
          .fill(null)
          .map((_, i) => {
            return (
              <Square
                winner={winner}
                key={i}
                onClick={() => setSquareValue(i)}
                value={squares[i]}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Board;
