import logo from './logo.svg';
import ComponenteMostrarPelicula from './peliculas/MostrarPelicula.js';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import react from 'react';

function App() {
  return (
  
    <div className="App">
    <div className ="container">
      <h1>Tabla de Peliculas</h1>
    </div>
      <BrowserRouter> 
      <Routes>
        <Route Path ='/'element ={<ComponenteMostrarPelicula/>}></Route>
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
