import Navbar from './components/Navbar';
import React, {
  useEffect,
  useState
} from 'react';
import Personajes from './components/Personajes';
import Paginacion from './components/Paginacion';
import './App.css';


function App() {

  const [personajes, setPersonajes] = useState([]);
  const [info, setInfo] = useState({})

  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fetchPersonajes = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPersonajes(data.results); 
        setInfo(data.info);
      })
      .catch(error => alert(error))
  };

  const anterior = () => {
    fetchPersonajes(info.prev);
  }

  const siguiente = () => {
    fetchPersonajes(info.next);
  }

  useEffect(() => {
    fetchPersonajes(initialUrl);
  }, []);


  return ( 
    <>
      <Navbar brand = "Rick and Morty App" / >

      <div className="container mt-4">
      <Paginacion 
        prev={info.prev} 
        next={info.next} 
        anterior={anterior} 
        siguiente={siguiente}/>
        <Personajes personajes={personajes}/>
        <Paginacion 
        prev={info.prev} 
        next={info.next} 
        anterior={anterior} 
        siguiente={siguiente}/>
      </div>
    </>
  );
}

export default App;