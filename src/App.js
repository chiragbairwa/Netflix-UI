import React from 'react';
import classes from './App.module.css';
import Navbar from './comp/Navbar';

function App() {
  return (
    <div className="App">
      <div className={classes.div}>
        <section className={classes.Navbar}>
          <Navbar />
        </section>
        <section className={classes.Content}>.</section>
        <section className={classes.Social}>.</section>
      </div>
    </div>
  );
}

export default App;
