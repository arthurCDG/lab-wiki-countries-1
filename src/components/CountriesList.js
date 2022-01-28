import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({allCountries}) => {
  return (
    <div className="col-5">
      <div className='list-group'>
          {allCountries.map(country => {
            return (
              <div className='list-group-item list-group-item-action'>
                <Link to={`/${country.alpha3Code}`} key={country.name.common}>
                  <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.official} />
                  <h1>{country.name.common}</h1>
                </Link>
              </div>
            )
          })}
      </div>
    </div>
  );
};

export default CountriesList;
