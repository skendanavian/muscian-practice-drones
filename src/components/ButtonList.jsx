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
  const buttons = keyNames.map((noteName) => {
    return <Button key={noteName}>{noteName}</Button>;
  });

  return (
    <div className="grid-container">
      <div className="btn-grid">{buttons}</div>
    </div>
  );
}

export default ButtonList;
