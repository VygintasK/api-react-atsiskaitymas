import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'


const Header = () => {

  const [country, setCountry] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    let { value } = event.target.elements.countryInput
    setCountry(value)

    event.target.reset()
  }


  return (
    <div className='header'>
      <Link className='Header-link' to="/">HOME</Link>
      <Link className='Header-link' to="/countries">COUNTRIES</Link>
    </div>
  )
}

export default Header