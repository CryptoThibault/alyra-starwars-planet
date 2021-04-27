import React, { useEffect, useState } from 'react';
import Planet from './Planet'
import Scroll from './Scroll'

const PlanetApp = () => {
  const [planetList, setPlanetList] = useState([])
  const [size, setSize] = useState(1)

  useEffect(() => {
    for (let i = 1; i < size + 1; i++) {
      const url = `https://swapi.dev/api/planets/${i}` //Cross-origin ... (error) 
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Can't connect to api")
          }
          return response.json()
        })
        .then((data) => {
          console.log(data)
          setPlanetList([...planetList, data])
        })
        .catch((error) => {
          alert(error.message)
        })
    }
  }, [planetList, setPlanetList, size])

  return (
    <div>
      <ul>
        {planetList.map((el) => {
          return <Planet planet={el} />
        })}
      </ul>
      <Scroll size={size} setSize={setSize} />
    </div>
  );
};

export default PlanetApp;