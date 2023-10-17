export const Hellolist = () => {
  const names = ["Anna", "Anechka", "Anita"];

  const listNames = names.map((name, index) => {
    const key = `${index}${name}`;
    return <li key={key}>{name}</li>;
  });
  names.map((name) => <li>{name}</li>);

  return <ul>{listNames}</ul>;
};
