import React from 'react'
import useAxios from 'axios-hooks'

const AxiosHook = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    'https://restcountries.com/v3.1/all'
  )
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div>
        <h1> Plikas Reactas shlamstas</h1>
      <button onClick={refetch}>Perleidzia fetcha</button>
      <h1>{(data[120].name.common)}</h1>  
      <pre>{JSON.stringify(data, null, 4)}</pre>
      
    </div>
  )
}
export default AxiosHook
