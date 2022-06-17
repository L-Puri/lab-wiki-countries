// import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import countriesJson from './countries.json';
import { useState } from "react";
import CountriesList from "./components/CountriesList"
import { Routes, Route } from "react-router-dom"
import CountriesDetails from './components/CountryDetails';
import { useState, useEffect } form 'react';
import axios from 'axios';


function App() {
  const [country, setCountry] = useState(countriesJson)
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
    .get("https://ih-countries-api.herokuapp.com/countries")
    .then((response) => {
      console.log('response.data', response.data)
      setCountries(response.data)
    })
  }, []);


  return (
    <div className="App">
      <Navbar />
      <CountriesList country = {country} />

      <Routes>
    {countries.map(country => {
      
    })}
      <Route path="/:alpha3Code" element={ <CountriesDetails country={country} /> } />
      </Routes>
    </div>
  )
}

export default App
