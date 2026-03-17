import { act, useEffect, useState } from 'react';
import './App.css'
import AppCard from './components/AppCard';

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
                    <AppCard image={actor.image} name={actor.name} biography={actor.biography} birth_year={actor.birth_year} nationality={actor.nationality} known_for={actor.known_for} awards={actor.awards} />
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
                    <AppCard image={actress.image} name={actress.name} biography={actress.biography} birth_year={actress.birth_year} nationality={actress.nationality} known_for={actress.most_famous_movies} awards={actress.awards} />
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
                    <AppCard image={actress.image} name={actress.name} biography={actress.biography} birth_year={actress.birth_year} nationality={actress.nationality} known_for={actress.most_famous_movies} awards={actress.awards} />
                  </div>
                ))
              }

              {
                actors.map((actor, i) => (
                  <div key={i} className="col">
                    <AppCard image={actor.image} name={actor.name} biography={actor.biography} birth_year={actor.birth_year} nationality={actor.nationality} known_for={actor.known_for} awards={actor.awards} />
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
