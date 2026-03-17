import { act, useEffect, useState } from 'react';
import './App.css'

function App() {

  const actorsEndpoint = "https://lanciweb.github.io/demo/api/actors/";
  const actressesEndpoint = "https://lanciweb.github.io/demo/api/actresses/";

  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);

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
    fetchData(actressesEndpoint, setActresses);
  }, [])

  return (
    <>
      <main id="app-main">
        <section id='actors' className='my-4'>
          <div className="container">

            <h2>Attori</h2>

            <div className="overflow-auto d-flex gap-4 py-4">
              {
                actors.map((actor, i) => (
                  <div key={i} className="col">
                    <div className="card text-white h-100 rounded-5 actor-card" style={{ backgroundImage: `url(${actor.image})` }}>
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

        <section id='actresses' className='my-4'>
          <div className="container">

            <h2>Attrici</h2>

            <div className="overflow-auto d-flex gap-4 py-4">
              {
                actresses.map((actress, i) => (
                  <div key={i} className="col">
                    <div className="card text-white h-100 rounded-5 actor-card" style={{ backgroundImage: `url(${actress.image})` }}>
                      <div className="card-body d-flex flex-column justify-content-end p-4 bg-card-overlay">
                        <div>{actress.birth_year} - {actress.nationality}</div>
                        <h3 className="card-title">{actress.name}</h3>
                        <p className="card-text">{actress.biography}</p>
                        <div className='d-flex flex-wrap gap-4'>
                          {
                            actress.awards.map((award, i) => (
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

        <section id='complete-list' className='my-4'>
          <div className="container">

            <h2>Lista Completa</h2>

            <div className="overflow-auto d-flex gap-4 py-4">
              {
                actresses.map((actress, i) => (
                  <div key={i} className="col">
                    <div className="card text-white h-100 rounded-5 actor-card" style={{ backgroundImage: `url(${actress.image})` }}>
                      <div className="card-body d-flex flex-column justify-content-end p-4 bg-card-overlay">
                        <div>{actress.birth_year} - {actress.nationality}</div>
                        <h3 className="card-title">{actress.name}</h3>
                        <p className="card-text">{actress.biography}</p>
                        <div className='d-flex flex-wrap gap-4'>
                          {
                            actress.awards.map((award, i) => (
                              <span key={i}>{award}</span>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }

              {
                actors.map((actor, i) => (
                  <div key={i} className="col">
                    <div className="card text-white h-100 rounded-5 actor-card" style={{ backgroundImage: `url(${actor.image})` }}>
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
