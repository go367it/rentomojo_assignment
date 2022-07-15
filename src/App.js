import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { GameProvider } from "./Context/GameContext";

function App() {
  return (
    <div className="App">
      <GameProvider>
        <Navbar />
        <Homepage />
      </GameProvider>
    </div>
  );
}

export default App;
