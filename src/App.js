import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React !!!</h1>
        <Weather city="Madrid" />
      </header>
    </div>
  );
}

export default App;
