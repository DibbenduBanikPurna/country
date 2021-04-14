import React, { useEffect, useState } from 'react';
import './App.css';
import AllCountry from './Components/AllCountry/AllCountry';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import SpecificCountry from './Components/SpecificCountry/SpecificCountry';
function App() {
  const [country,setCountry]=useState([])
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>{
      
      setCountry(data)
    })
  },[])
  return (
    <div className="App">
      <h2>Country:{country.length}</h2>
      <Router>
        <Switch>
          <Route exact path="/">   <AllCountry country={country} /> </Route>
          <Route path="/country/:name"><SpecificCountry/> </Route>
      
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
