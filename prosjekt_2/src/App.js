import React from 'react';
import Header from "./components/Header";
import Web_storage from "./components/Web_storage";
import Country_spec from "./components/Country_spec";
import Animation from "./components/Animation";


function App() {
  return (
    <div >
          <Header />
          <Animation />
          <Country_spec />
          <Web_storage />
    </div>
  );
};

export default App;
