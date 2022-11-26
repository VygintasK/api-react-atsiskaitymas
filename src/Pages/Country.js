import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Country = () => {
  let params = useParams();

  const [country, setCountry]= useState([])

  



  
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/alpha/'+params.cca2)
    .then(res => res.json())
    .then(oneCountryData =>{

      setCountry(...oneCountryData)
    })
  },[params.cca2])
  
  console.log(country.name)


  return (
    <div>
      {/* <h1>{country.name.common}</h1> */}
       <strong>{params.cca2}</strong>
    </div>
  )
}

export default Country