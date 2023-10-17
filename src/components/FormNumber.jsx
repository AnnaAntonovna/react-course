import { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "./AppContext";

export const FormNumber = () => {
  const [number, setNumber] = useState("");
  const [surname, setSurname] = useState("");
  const [state, dispatch] = useContext(ApplicationContext);

  const clickHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const newNumber = parseInt(number);
    dispatch({ type: "NUMBERCHANGED", number: newNumber });
    console.log(`Number sumbitted ${state.number}`);
  };

  return (
    <form>
      <label>
        Number of users:
        <input
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        ></input>
      </label>

      <button onClick={clickHandler}>
        Submit!
      </button>
    </form>
  );
};
