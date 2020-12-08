import { useState, useRef } from "react";
import "./Button.scss";
import classNames from "classnames";

function Button({ id, url, children }) {
  // For future versions - Possibility to implement Sine Wave with mutable properties
  // create web audio api context
  // var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  // // create Oscillator node
  // var oscillator = audioCtx.createOscillator();

  // oscillator.type = "square";
  // oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
  // oscillator.connect(audioCtx.destination);
  // oscillator.volume(0.9);
  // oscillator.start();

  const [selected, setSelected] = useState(false);

  const btnStyle = classNames("btn", { "btn--selected": selected });

  const drone = useRef(new Audio(`/sounds/${url}`));
  drone.current.defaultPlaybackRate = 2.0;
  drone.current.loop = true;

  const pauseAudio = () => {
    drone.current.pause();
    drone.current.currentTime = 0.5;
    console.log("pausing");
  };
  const playAudio = () => {
    drone.current.currentTime = 0.5;
    drone.current.play().catch((err) => console.log(err));
    console.log("playing");
  };

  const selectBtn = () => {
    console.log(`clicked - play ${url}`);
    if (!selected && drone.current.paused) {
      setSelected(true);
      playAudio();
    } else if (selected) {
      setSelected(false);
      pauseAudio();
    }
  };

  return (
    <button
      className={btnStyle}
      key={id}
      onClick={() => selectBtn()}
      selected={selected}
    >
      {children}
    </button>
  );
}

export default Button;
