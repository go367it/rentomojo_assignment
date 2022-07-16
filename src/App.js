import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { GameProvider } from "./Context/GameContext";
import { FilterProvider } from "./Context/FilterContext";
import { SearchProvider } from "./Context/SearchContext";

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <GameProvider>
          <FilterProvider>
            <Navbar />
            <Homepage />
          </FilterProvider>
        </GameProvider>
      </SearchProvider>
    </div>
  );
}

export default App;
