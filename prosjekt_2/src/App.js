import React from 'react';
import Header from "./components/Header";
import SessionStorage from "./components/SessionStorage";
import Country_spec from "./components/Country_spec";


function App() {
  return (
    <div >
          <Header />
          <Country_spec />
          <SessionStorage />
    </div>
  );
};

export default App;
