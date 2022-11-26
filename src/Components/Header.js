import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'


const Header = () => {
  return (
    <div className='header'>
        <Link className='Header-link' to="/">HOME</Link>
        <Link className='Header-link' to="/countries">COUNTRIES</Link>

    </div>
    )
}

export default Header