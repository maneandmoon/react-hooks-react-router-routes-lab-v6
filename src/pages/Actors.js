import { useEffect, useState } from "react";
import ReusuableCard from "../components/ReusableCard";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:4000/actors")
    .then (res => res.json())
    .then(data => setActors(data))
    .catch(error => console.error(error))
  }, [])

  const actorList = actors.map(actor => 
      <ReusuableCard key={actor.id} name={actor.name} movies={actor.movies} />
  )
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        <ul>{actorList}</ul>
        
      </main>
    </>
  );
};

export default Actors;
