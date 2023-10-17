import { useState, useEffect } from "react";

export const useRandomUsers = (numberOfUsers = 1) => {
  const [users, setUsers] = useState([]);
  console.log(`Number of users in the hook ${numberOfUsers}`);
  useEffect(() => {
    if (numberOfUsers <= 0) {
      console.error("Minimum number of users is 1.");
      return;
    }

    fetch(`https://randomuser.me/api/?results=${numberOfUsers}`).then(
      (response) => {
        if (response) {
          response.json().then((data) => {
            setUsers(data.results);
          });
        }
      }
    );
  }, [numberOfUsers]);

  return users;
};
