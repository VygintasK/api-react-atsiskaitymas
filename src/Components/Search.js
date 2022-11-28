import React,{ useState } from 'react'
import useAxios from 'axios-hooks'

const Search = () => {
    
    const [country, setCountry] = useState('')

    const submitHandler = (event) => {
      event.preventDefault()
      let { value } = event.target.elements.countryInput
      setCountry(value)
      event.target.reset()
    }
    console.log(country)

    // const [{ data, loading, error }, refetch] = useAxios(
    //   'https://restcountries.com/v3.1/name/' + name
    // )
    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error!</p>


  return (
    <div>
        <form className='search-form' onSubmit={submitHandler}>
            <input id='countryInput' type="text" placeholder='Enter country name'></input>
            <input type='submit' value='Search' ></input>
        </form>
    </div>
  )
}

export default Search