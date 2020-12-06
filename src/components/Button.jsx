import { useState, useRef } from "react";
import "./Button.scss";
import classNames from "classnames";

function Button({ id, url, children }) {
  const [selected, setSelected] = useState(false);

  const btnStyle = classNames("btn", { "btn--selected": selected });

  const drone = useRef(new Audio(`/sounds/${url}`));
  drone.current.loop = true;

  const pauseAudio = () => {
    drone.current.pause();
    drone.current.currentTime = 0.0;
    console.log("pausing");
  };
  const playAudio = () => {
    drone.current.play().catch((err) => console.log(err));
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
