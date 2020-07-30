import React from 'react';
import './App.css';

import Weather from "./Weather";
import News from "./News";
import ToDo from "./ToDo";

function App() {
  return (
  <main>
    <h1>Hello, Aashish! </h1>
      <h5>WHAT A BEAUTIFUL DAY TO BE PRODUCTIVE </h5>
    <Weather/>
    <section>
      <div>
      <h3> Latest News</h3>
        <News/>
      </div>
      <div>
      <ToDo/>
      </div>
    </section>
  </main>
  );
}

export default App;
