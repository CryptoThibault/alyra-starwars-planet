const Planets = ({ planetList }) => {
  return (<ul>
    { planetList.map(({ name, population, climate }) => {
      return (
        <li key={name}>
          <h1>{name}</h1>
          <p>Population</p>
          <p>{population}</p>
          <p>Climate</p>
          <p>{climate}</p>
        </li>
      );
    })}
  </ul>)

};

export default Planets;