import { useContext, useEffect } from "react";
import { ApplicationContext } from "./AppContext";

export const HelloCounter = () => {
  const [state, dispatch] = useContext(ApplicationContext);
  const { count } = state;

  const handleClick = () => {
    dispatch({ type: "INCREMENT" });
  }

  useEffect(() => {
    console.log("Counter updated to: " + count);
    document.title = `Count ${count}`;
  });

  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={handleClick}>Press here!</button>
    </div>
  );
};
