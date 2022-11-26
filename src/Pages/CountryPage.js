import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CountryPage = () => {
  let params = useParams();

  const [country, setCountry]= useState("Cia: useState")

  useEffect(()=>{
    
    async function fetchFunkcijaPerAxios() {
      const response = await axios.get('https://restcountries.com/v3.1/alpha/' + params.cca2)
      
      let countryOBJ=response.data[0]
        setCountry(countryOBJ)

    }
    fetchFunkcijaPerAxios()
  },[params.cca2])
  console.log(country)

  return (
    <div>
      {/* <h1>{country.common}</h1> */}
       <strong>{params.cca2}</strong>
    </div>
  )
}

export default CountryPage





