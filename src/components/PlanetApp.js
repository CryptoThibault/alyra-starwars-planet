import React, { useEffect, useState } from 'react';
import Planets from './Planets'
import Scroll from './Scroll'

const PlanetApp = () => {
  const [planets, setPlanets] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [next, setNext] = useState(null)

  useEffect(() => {
    setLoading(true)
    const url = `https://swapi.dev/api/planets/?page=${page}`
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Can't connect to api")
        }
        return response.json()
      })
      .then((data) => {
        setPlanets(planets => [...planets, ...data.results])
        setLoading(false)
        setNext(!!data.next)
      })
  }, [page])

  return (
    <div className=" py-5">
      <div className="container" >
        <h1 className="mb-5">Planètes dans l'univers star wars</h1>
        {loading && (
          <div className="mb-4 text-center p-3">loading...</div>
        )}
        <Planets planets={planets} />
        <Scroll page={page} setPage={setPage} next={next} />
      </div>
    </div>
  );
};

export default PlanetApp;