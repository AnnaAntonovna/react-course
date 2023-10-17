import { useContext, useEffect } from "react";
import "./../styles.css";
import { MyContext } from "./hello-context";

export const HelloButton = () => {
  const style = {
    color: "#03fc73",
    margin: 20,
  };

  const name = useContext(MyContext);

  const clickHandler = () => {
    alert(`Hello ${name}`);
  };
  return (
    <button style={style} className="hello-world" onClick={clickHandler}>
      Say hello!
    </button>
  );
};
