const Planet = ({ name, population, climate }) => {
  return (
    <li>
      <h1>{name}</h1>
      <p>Population</p>
      <p>{population}</p>
      <p>Climat</p>
      <p>{climate}</p>
    </li>
  );
};

export default Planet;