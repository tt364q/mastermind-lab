import './App.css';
import GameBoard from "./components/GameBoard/GameBoard"
import ColorPicker from "./components/ColorPicker/ColorPicker"
// import GuessRow from "./components/GuessRow/GuessRow"
// import GuessRowTwo from "./components/GuessRowTwo/GuessRowTwo"
// import GuessPegs from "./components/GuessPegs/GuessPegs"
// import GuessPeg from "./components/GuessPeg/GuessPeg"
import GuessScore from "./components/GuessScore/GuessScore"
import GameTimer from "./components/GameTimer/GameTimer"
import NewGameButton from "./components/NewGameButtoon/NewGameButton"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
       React Mastermind
      </header>
      <main className="container" id="gameboard">
      <GameBoard />
      <div>
      <ColorPicker />
      <GameTimer />
      <NewGameButton />
      </div>
      </main>

      <Footer />

    </div>
  );
}

export default App;
