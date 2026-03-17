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
        <section id='actors'>
          {
            actors.map((actor, i) => (
              <div key={i}>
                <img src={actor.image} alt={`${actor.name} photo`} />
                <h2>{actor.name}</h2>
                <div>
                  <span>{actor.birth_year}</span>
                  <span>{actor.nationality}</span>
                </div>
                <p>{actor.biography}</p>
                <div>
                  <ul>
                    {actor.awards.map((award, i) => (
                      <li key={i}>{award}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          }
        </section>
      </main>
    </>
  )
}

export default App
