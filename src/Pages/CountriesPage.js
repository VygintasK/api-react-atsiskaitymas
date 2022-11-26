import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const CountriesPage = () => {
  
  const [countries, setCountries]= useState([ ])

  useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(countryData =>{

      setCountries(countryData)
    })
  },[])



  return (
    <div>
      <h1>Countries</h1>
      
      {countries && (
        <ul>
          {countries.map((country,index)=> 
          <li key={index}><Link to={'/countries/'+country.cca2}>{country.name.common}</Link></li> 
          )}
        </ul>
        )}
    </div>
  )
}

export default CountriesPage