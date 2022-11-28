import React from 'react'
import useAxios from 'axios-hooks'
import './Country.css'

const Country = ({ name }) => {

  const [{ data, loading, error }] = useAxios(
    'https://restcountries.com/v3.1/name/' + name
  )

  if (loading) return <p className='error-loading'><strong>Loading...</strong></p>
  if (error) return <p className='error-loading'><strong>Error, no "{name}" has been found... </strong></p>

  return (
    <div className='country-wrap'>
      {
        data.map((country, index) => {
          return <div key={index} className={' country'}>
            <img className='country-flag' src={country.flags.png} width="100"></img>
            <h2 className='country-title'>{country.name.common} ({country.cca2})</h2>
            <p className='country-paragraph'>{country.name.common} a.k.a. {country.name.official}, - located in {country.continents[0]}.Its capital is {country.capital}. Country is {country.unMember ? 'a' : 'not a'} member of UN. It has population of {country.population} people. Its teritory size is {country.area}km². </p>
          </div>
        })
      }
    </div>
  )
}

export default Country