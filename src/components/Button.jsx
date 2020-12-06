import { useState } from "react";
import "./Button.scss";
import classNames from "classnames";

function Button({ key, children }) {
  const [selected, setSelected] = useState(false);

  const selectBtn = () => {
    console.log(`clicked`);
    !selected ? setSelected(true) : setSelected(false);
  };

  const btnStyle = classNames("btn", { "btn--selected": selected });

  console.log(key);
  return (
    <button
      className={btnStyle}
      key={key}
      onClick={() => selectBtn()}
      selected={selected}
    >
      {children}
    </button>
  );
}

export default Button;
