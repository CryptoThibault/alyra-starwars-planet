import React, { useEffect, useState } from 'react';
import Planets from './Planets'
import Scroll from './Scroll'

const PlanetApp = () => {
  const [planetList, setPlanetList] = useState([])
  const [size, setSize] = useState(10)
  useEffect(() => {
    const url = `https://swapi.dev/api/planets/`
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Can't connect to api")
        }
        return response.json()
      })
      .then((data) => {
        setPlanetList(data.results)
        console.log(planetList)
      })
  }, [planetList, size])

  return (
    <div>
      <Planets planetList={planetList} />
      <Scroll size={size} setSize={setSize} />
    </div>
  );
};

export default PlanetApp;