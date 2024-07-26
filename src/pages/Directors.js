import { useEffect, useState } from "react";
import ReusuableCard from "../components/ReusableCard";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);
  
  useEffect(() =>{
    fetch("http://localhost:4000/directors")
    .then(res => res.json())
    .then(data => setDirectors(data))
    .catch(error => console.error(error))
  }, [])

  const directorList = directors.map(director => 
      <ReusuableCard key={director.id} name={director.name} movies={director.movies} />)
  
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        <ul>{directorList}</ul>
      </main>
    </>
  );
};

export default Directors;
