import React from 'react';
import Header from "./components/Header";
import Country from "./components/Country";
import logo from "./image/logo.svg";

function App() {
  return (
    <div>
          <Header />
          <Country
          name = "Colombia"
          description = "Teste Colombia"
          logo = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
            <circle cx="50" cy="50" r="40" stroke="black"
              stroke-width="3" fill="red" />
          </svg>
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
