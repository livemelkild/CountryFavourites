import React from 'react';
import Header from "./components/Header";
import LocalStorage from "./components/LocalStorage";
import SessionStorage from "./components/SessionStorage";
import Country_spec from "./components/Country_spec";
import Poem from "./components/Poem";


function App() {
  return (
    <div >
          <Header />
          <Country_spec />
          <LocalStorage />
          <SessionStorage />
          <Poem />

    </div>
  );
};

export default App;
