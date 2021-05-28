import React from 'react';
import classes from './App.module.css';
import Navbar from './comp/Navbar';
import Main from './comp/main';

function App() {
  return (
    <div className="App">
      <div className={classes.container}>
        <section className={classes.Navbar}>
          <Navbar />
        </section>
        <section className={classes.Content}>
          <Main />
        </section>
        <section className={classes.Social}>.</section>
      </div>
    </div>
  );
}

export default App;
