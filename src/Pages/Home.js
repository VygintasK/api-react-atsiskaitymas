import React, { useState } from 'react'
import './Home.css'

import Country from '../Components/Country'



const Home = () => {

  const [country, setCountry] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    let { value } = event.target.elements.countryInput
    setCountry(value)

    event.target.reset()
  }


  return (
    <div className='home-wrapper'>
      {!country ? 
        <div className='Home'>
          <h1>Find a country of interest...</h1>
          <form className='search-form' onSubmit={submitHandler}>
            <input id='countryInput' type="text" placeholder='Enter country name'></input>
            <input type='submit' value='Search' ></input>
          </form>
        </div>
      : <Country name={country} />}
    </div>

  )
}

export default Home