import {Routes,Route} from "react-router-dom"
import Header from "./Components/Header";

import Home from "./Pages/Home"
import CountriesPage from "./Pages/CountriesPage"
import Country from "./Pages/Country"

import './App.css';


function App() {
  return (

    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>

        <Route path='/countries' element={<CountriesPage/>}></Route>
        <Route path='/countries/:countriesId' element={<Country/>}></Route>
        <Route path='*' element={<h1>404 error</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App
