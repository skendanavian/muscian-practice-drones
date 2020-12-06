import { useState, useEffect } from "react";
import "./Button.scss";
import classNames from "classnames";

function Button({ id, url, children }) {
  const [selected, setSelected] = useState(false);

  const btnStyle = classNames("btn", { "btn--selected": selected });

  const drone = new Audio(`/sounds/${url}`);
  // drone.loop = true;

  const pauseAudio = () => {
    drone.pause();
    console.log("pausing");
  };
  const playAudio = () => {
    drone.play();
    console.log("playing");
  };

  // useEffect(() => {
  //   if (selected && drone.paused) {
  //     drone.play();
  //     console.log("clicked on");
  //   } else if (!selected) {
  //     console.log(drone.paused);
  //     drone.mute();
  //     console.log(drone.paused);
  //     drone.currentTime = 0;
  //     console.log("clicked off");
  //   }
  // }, [selected]);

  const selectBtn = () => {
    console.log(`clicked - play ${url}`);
    if (!selected) {
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
