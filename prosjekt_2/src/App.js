import React from 'react';
import Header from "./components/Header";
import Country from "./components/Country";

function App() {
  return (
    <div>
          <Header />

          <Country
          name = "Colombia"
          description = "Teste Colombia"
          />
          <Country
          name = "Norway"
          description = "Teste Norway"
          />
          <Country
          name = "Italy"
          description = "Teste Italy"
          />
          <Country
          name = "Norway"
          description = "Teste Norway"
          />

    </div>
  );
};

export default App;
