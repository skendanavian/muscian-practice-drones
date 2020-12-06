import "./ButtonList.scss";
import Button from "./Button";

const keyNames = [
  { id: "C", url: "cdrone.mp3" },
  { id: "F", url: "fdrone.mp3" },
  { id: "Bb", url: "bbdrone.mp3" },
  { id: "Eb", url: "ebdrone.mp3" },
  { id: "Ab", url: "abdrone.mp3" },
  { id: "Db/C#", url: "dbdrone.mp3" },
  { id: "Gb/F#", url: "gbdrone.mp3" },
  { id: "B", url: "bdrone.mp3" },
  { id: "E", url: "edrone.mp3" },
  { id: "A", url: "adrone.mp3" },
  { id: "D", url: "ddrone.mp3" },
  { id: "G", url: "gdrone.mp3" },
];

function ButtonList({ key, handler }) {
  const buttons = keyNames.map((key) => {
    return (
      <Button key={key.id} url={key.url}>
        {key.id}
      </Button>
    );
  });

  return (
    <div className="grid-container">
      <div className="btn-grid">{buttons}</div>
    </div>
  );
}

export default ButtonList;
