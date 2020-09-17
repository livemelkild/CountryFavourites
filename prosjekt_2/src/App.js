import React from 'react';
import Header from "./components/Header";
import Country from "./components/Country";
import Web_storage from "./components/Web_storage";
import Country_spec from "./components/Country_spec";

function App() {
  return (
    <div>
          <Header />
          <div className = "wrapper">
            
            <Country_spec />
            <Web_storage />
          </div>
    </div>
  );
};

export default App;
