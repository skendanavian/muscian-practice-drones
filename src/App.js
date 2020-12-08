import ButtonList from "../src/components/ButtonList";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>Musician Practice Drones</h1>
      <ButtonList />
      <div className="footer">
        <p>
          <a
            className="p2"
            href="https://www.buymeacoffee.com/skendanavian"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy the developer a coffee!
          </a>
          <br /> &copy; 2020 - All Rights Reserved -{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.sorennissen.com"
          >
            Soren Nissen
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
