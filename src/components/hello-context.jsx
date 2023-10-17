import { createContext, useState } from "react";
import { HelloButton } from "./hello-button";
import { HelloForm } from "./hello-form";
import { HelloCheckbox } from "./hello-checkbox";

export const MyContext = createContext();

export const HelloContext = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <MyContext.Provider value={[isChecked, setIsChecked]}>
      <HelloButton />
      <HelloCheckbox />
      <HelloForm />
    </MyContext.Provider>
  );
};
