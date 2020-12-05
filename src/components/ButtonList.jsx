import { useState } from "react";
import "./ButtonList.scss";
import Button from "./Button";

const keyNames = [
  "C",
  "F",
  "Bb",
  "Eb",
  "Ab",
  "Db/C#",
  "Gb/F#",
  "B",
  "E",
  "A",
  "D",
  "G",
];

function ButtonList({ key, handler }) {
  const [selected, setSelected] = useState(false);

  const selectBtn = () => {
    setSelected(true);
    console.log(`clicked`);
  };

  const buttons = keyNames.map((noteName) => {
    return (
      <Button key={noteName} clickHandler={selectBtn} selected={selected}>
        {noteName}
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
