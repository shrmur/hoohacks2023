import { useState } from 'react'
import './App.css'
import Landing from "./components/LandingPage"
import School from "./components/School"
import Search from "./components/SearchBar"
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />}/>
          <Route path={"\school"} element={<School />}/>
          <Route path={"\search"} element={<Search />}/>


        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
