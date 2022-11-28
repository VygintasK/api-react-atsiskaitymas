import { Link } from 'react-router-dom'
import useAxios from 'axios-hooks'
import "./CountriesPage.css"


const CountriesPage = () => {

  const [{ data, loading, error }] = useAxios(
    'https://restcountries.com/v3.1/all'
  )
  if (loading) return <p className='error-loading'><strong>Loading...</strong></p>
  if (error) return <p className='error-loading'><strong>Error...</strong></p>

  return (
    <div className='countriesWrapper'>
      <h1>WORLDS COUNTRIES: </h1>
      <ul>
        {data.map((country, index) =>
          <li key={index}><Link to={'/countries/' + country.cca2}>{country.name.common}</Link></li>
        )}
      </ul>
    </div>
  )

}
export default CountriesPage