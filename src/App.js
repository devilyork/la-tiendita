import React from 'react';
import logo from './img/tiendaFHD.png';
import './App.css';
import Button from 'react-bootstrap/Button';
//import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
           BIENVENIDOS
        </h1>
        <div className="botonPrincipal">
        <button type="button" class="btn btn-primary btn-lg btn-entrar">ENTRAR</button>
        </div>
      </header>
    </div>
  );
}

export default App;
