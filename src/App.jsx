import { act, useEffect, useState } from 'react';
import './App.css'

function App() {

  const actorsEndpoint = "https://lanciweb.github.io/demo/api/actors/";

  const [actors, setActors] = useState([]);

  /**
   * 
   * @param {string} endpoint 
   */
  function fetchData(endpoint, setValue) {
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        setValue(data);
      })
      .catch(error => console.log("Errore: " + error))
  }

  useEffect(() => {
    fetchData(actorsEndpoint, setActors);
  }, [])

  return (
    <>
      <main id="app-main">
        <section id='actors'>
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
              {
                actors.map((actor, i) => (
                  <div key={i} className="col p-4">
                    <div className="card text-white h-100 rounded-4 actor-card" style={{ backgroundImage: `url(${actor.image})` }}>
                      <div className="card-body d-flex flex-column justify-content-end p-4 bg-card-overlay">
                        <div>{actor.birth_year} - {actor.nationality}</div>
                        <h3 className="card-title">{actor.name}</h3>
                        <p className="card-text">{actor.biography}</p>
                        <div className='d-flex flex-wrap gap-4'>
                          {
                            actor.awards.map((award, i) => (
                              <span key={i}>{award}</span>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </main >
    </>
  )
}

export default App
