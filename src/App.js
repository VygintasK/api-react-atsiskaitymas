import {Routes,Route} from "react-router-dom"
import Header from "./Components/Header";

import Home from "./Pages/Home"
import CountriesPage from "./Pages/CountriesPage"
import CountryPage from "./Pages/CountryPage"

import './App.css';


function App() {
  return (

    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>

        <Route path='/countries' element={<CountriesPage/>}></Route>
        <Route path='/countries/:cca2' element={<CountryPage/>}></Route>
        <Route path='*' element={<h1>404 error</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App
