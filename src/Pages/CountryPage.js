import axios from 'axios';
import useAxios from 'axios-hooks'
import { useParams } from 'react-router-dom'
import Country from '../Components/Country';
import "./CountryPage.css"

const CountryPage = () => {
  let params = useParams();

  const [{ data, loading, error }] = useAxios(
    'https://restcountries.com/v3.1/alpha/' + params.cca2
  )
  if (loading) return <p className='error-loading'><strong>Loading...</strong></p>
  if (error) return <p className='error-loading'><strong>Error...</strong></p>


  return (
    <div className='country-page-wrapper'>
      <Country name={data[0].name.common}></Country>
    </div>
  )
}

export default CountryPage





