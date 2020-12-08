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
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.sorennissen.com"
          ></a>{" "}
          &copy; 2020 - All Rights Reserved - Soren Nissen
        </p>
      </div>
    </div>
  );
}

export default App;
