import { useState, useEffect, useContext } from "react";
import { useRandomUsers } from "../utils/HelloHook";
import { ApplicationContext } from "./AppContext";

export const HellolistApi = () => {

  const [state] = useContext(ApplicationContext);

  const users = useRandomUsers(state.number);

  return (
    <ul>
      {Boolean(users.length) &&
        users.map((user, index) => {
          const name = user.name.first;
          const key = `${name}${index}`;
          return <li key={key}>{name}</li>;
        })}
    </ul>
  );
};
