import ButtonList from "../src/components/ButtonList";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="title-container">
        <h1>Musician Practice Drones</h1>
      </div>

      <ButtonList />

      <div className="footer">
        <a
          className="p2 coffeeLink"
          href="https://www.buymeacoffee.com/skendanavian"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy the developer a coffee!
        </a>
        <p className="copyright">
          <br /> Copyright &copy; 2020 - All Rights Reserved -{" "}
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
