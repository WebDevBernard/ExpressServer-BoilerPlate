import "./App.css";

const Square = () => {
  const handleClick = () => {};
  return <td>-</td>;
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
