import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./CountryPage.css"

const CountryPage = () => {
  let params = useParams();

  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState([])

  useEffect(() => {

    async function fetchFunkcijaPerAxios() {
      const response = await axios.get('https://restcountries.com/v3.1/alpha/' + params.cca2)

      let countryOBJ = response.data[0]
      setCountry(countryOBJ)
      setLoading(false)
    }
    fetchFunkcijaPerAxios()
  }, [params.cca2])


  return (
    <div className='country-page-wrapper'>
      <div className='test'>
      {loading ? <h1>Loading…</h1> :
          <h1>{country.name.common}</h1>
        }
      </div>
    </div>
  )
}

export default CountryPage





