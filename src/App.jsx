import { act, useEffect, useState } from 'react';
import './App.css'

function App() {

  const endpoint = "https://lanciweb.github.io/demo/api/actors/";

  const [actors, setActors] = useState([]);

  /**
   * 
   * @param {string} endpoint 
   */
  function fetchActors(endpoint) {
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        setActors(data);
      })
      .catch(error => console.log("Errore: " + error))
  }

  useEffect(() => {
    fetchActors(endpoint);
  }, [])

  return (
    <>
      <main id="app-main">
        <ul>
          {
            actors.map((actor, i) => (
              <li key={i}>{actor.name}</li>
            ))
          }
        </ul>
      </main>
    </>
  )
}

export default App
