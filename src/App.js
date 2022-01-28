import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
// import allCountries from "./countries.json"
import React, {useEffect, useState} from "react"
import axios from "axios"

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
    .then(countriesFetched => {
      setAllCountries(countriesFetched.data.sort((a, b) => a.name.common.localeCompare(b.name.common)));
      setLoading(!loading);
    })
  }, []);

  return (
    <div className="App">

      {loading && <img src="https://media.makeameme.org/created/data-dataeverywhere.jpg" alt="data-everywhere"/>}

      <Navbar />

      <div className="container">
        <div className='row'>
          <CountriesList allCountries={allCountries}/>
          <Routes>
            <Route path="/:countryAlpha3Code" element={<CountryDetails allCountries={allCountries} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
