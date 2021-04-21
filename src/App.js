import logo from './img/ico1.png';
import React from 'react';
import classes from './App.module.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img src={logo} alt="Logo" />
        </nav>
      </header>

      <div className={classes.MainContainer}>
        <div className={classes.ProductivePreview}>
          <img src='./img/ico1.png' alt="First Product" />
        </div>
      </div>


    </div>
  );
}

export default App;
