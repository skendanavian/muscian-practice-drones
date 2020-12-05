import "./Button.scss";
import classNames from "classnames";

function Button({ key, clickHandler, children, selected }) {
  const btnStyle = classNames("btn", { "btn--selected": selected });

  console.log(key);
  return (
    <button className={btnStyle} key={key} onClick={clickHandler}>
      {children}
    </button>
  );
}

export default Button;
