import React from 'react';
import Main from './comp/main';
import Navbar from './comp/Navbar';
import Social from './comp/Social';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <section style={{
          width: "18.5%",
          borderRight: "1px solid #F9FAFF",
        }}>
          <Navbar />
        </section>
        <section style={{
          width: '74.5%',
          backgroundColor: "#dce0e7",
        }}>
          <Main />
        </section>
        <section style={{ width: '7%' }}>
          <Social />
        </section>
      </div>
    </div>
  );
}

export default App;
