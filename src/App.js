import ButtonList from "../src/components/ButtonList";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>Musician Practice Drones</h1>
      <ButtonList />
      <div className="footer">
        <a
          className="p2 coffeeLink"
          href="https://www.buymeacoffee.com/skendanavian"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Buy the developer a coffee!</p>
        </a>
        <p className="copyright">
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
