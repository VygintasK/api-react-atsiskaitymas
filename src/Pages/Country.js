import React from 'react'
import { useParams } from 'react-router-dom'

const Country = () => {
  let params = useParams();
console.log(params.countriesId)

  return (
    <div>Country <strong>{params.countriesId}</strong></div>
  )
}

export default Country