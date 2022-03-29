import "./App.css";
import ReactCounter from "./components/Counter";
import Debounce from "./components/Debounce";
import Movies from "./components/FetchMovies";
import Board from "./components/TicTacToe";
function App() {
  return (
    <div className="App">
      <ReactCounter />
      <Debounce />
      <Movies />
      <Board />
    </div>
  );
}

export default App;
