import "./App.css";
import Weather from "./Weather.js";
import { Audio } from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React !!!</h1>
        <Weather city="Madrid" />
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </header>
    </div>
  );
}

export default App;
