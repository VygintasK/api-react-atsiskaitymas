import React from 'react'
import useAxios from 'axios-hooks'



const AxiosHook = () => {
  const [{ data, loading, error }, refetch] = useAxios(
    'https://restcountries.com/v3.1/alpha/LT'
  )
console.log(data)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div>
        <h1> Reactas shlamstas</h1>
      <button onClick={refetch}>Perleidzia fetcha</button>  
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  )
}
export default AxiosHook
