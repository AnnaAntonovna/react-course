import { useContext } from "react";
import { MyContext } from "./hello-context";
import { ApplicationContext } from "./AppContext";

export const HelloCheckbox = () => {
  const [state, dispatch] = useContext(ApplicationContext);

  const onChangeHandler = (event) => {
    const isChecked = event.target.checked;
    const type = isChecked ? "CHECK" : "UNCHECK";
    dispatch({ type });
  };

  return (
    <div>
      <input type="checkbox" onChange={onChangeHandler} />
      {state.isChecked ? <h1>Wow!</h1> : <p>Try again!</p>}
    </div>
  );
};
