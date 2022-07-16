import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { GameProvider } from "./Context/GameContext";
import { FilterProvider } from "./Context/FilterContext";

function App() {
  return (
    <div className="App">
      <GameProvider>
        <FilterProvider>
          <Navbar />
          <Homepage />
        </FilterProvider>
      </GameProvider>
    </div>
  );
}

export default App;
