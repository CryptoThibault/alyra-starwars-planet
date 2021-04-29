const Planets = ({ planets }) => {
  return (
    <ul className="list-unstyled">
      { planets.map(({ name, population, climate }) => {
        return (
          <li key={name} className="col-md-6 col-lg-4 col-xl-3 mb-4">
            <article className="bg-warning p-3">
              <h1>{name}</h1>
              <p>Population</p>
              <p>{population}</p>
              <p>Climate</p>
              <p>{climate}</p>
            </article>
          </li>
        );
      })}
    </ul>)

};

export default Planets;