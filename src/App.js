import ButtonList from "../src/components/ButtonList";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>Musician Practice Drones</h1>
      <ButtonList />
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.sorennissen.com"
        >
          Soren Nissen
        </a>{" "}
        &copy; 2020 - All Rights Reserved
      </p>
    </div>
  );
}

export default App;
