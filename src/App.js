import {Routes,Route} from "react-router-dom"
import Header from "./Components/Header/Header";

import Home from "./Pages/Home/Home"
import CountriesPage from "./Pages/Countries/CountriesPage"
import CountryPage from "./Pages/Country/CountryPage"
import Footer from "./Components/Footer/Footer"

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
      <Footer/>
    </div>
  );
}

export default App
