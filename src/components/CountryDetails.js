import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  // const [borderCountries, setBorderCountries] =useState([]);
  const {countryAlpha3Code} = useParams();
  /* ---------------- Iteration 1 & 2 ---------------- */
  // const country = allCountries.filter(
  //   (e) => e.alpha3Code === countryAlpha3Code
  // )[0];s

  // const addBorderCountries = async (arrayOfAlpha3Codes) => {
  //   try {
  //     const copy = [...borderCountries];
  //     await arrayOfAlpha3Codes.map(el => axios.get(`https://ih-countries-api.herokuapp.com/countries/${el}`).then(returnedObjet => copy.push(returnedObjet.name.common)));
  //     setBorderCountries(copy);
  //   } catch (error) {
  //     console.error(error)
  //   }
  // };

  useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryAlpha3Code}`)
    .then(fetchedCountry => {
      setCountry(fetchedCountry.data);
      // addBorderCountries(fetchedCountry.data.borders)
      setLoading(!loading);
    })
  }, [countryAlpha3Code]);
  
  return (
    <div className='col-7'>
      {loading && <img src="https://media.makeameme.org/created/data-dataeverywhere.jpg" alt="data-everywhere"/>}

      {!loading && 
        <div>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.official} />
          <h1>{country.name.common}</h1>
          <hr />
          <div>
            <span>Capital </span>
            <span>{country.capital[0]}</span>
          </div>
          <div>
            <span>Area </span>
            <span>{country.area} km²</span>
          </div>
          <div>
            <span>Borders </span>
            <ul>
              {country.borders.map(borderCountry => (
                <li key={borderCountry}>
                {borderCountry}
                {/* Iteration 1 & 2 --- Do I have to do an axios request to have an equivalent? */}
                {/* {allCountries.find(el => el.alpha3Code === borderCountry).name.official} */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      }
    </div>
  );
};

export default CountryDetails;
