import React from 'react';
import Header from "./components/Header";
import SessionStorage from "./components/SessionStorage";
import Country_spec from "./components/Country_spec";
import Start_page from "./components/Start_page";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div >
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Start_page}/>
          <Route path="/country" component={Country_spec}/>
        </Switch>
      </Router>
      
          
    </div>
  );
};

export default App;
