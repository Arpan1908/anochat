import React, { useContext } from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './logins/Login'
import Signup from './logins/Signup'
import Home from './Home'
import Private from './Private'
import AContext from './Context'
import Landing from './pages/Landing'
const Views = () => {
  
  return   (
  
  
    
    <Routes>
       <Route element={<Private />}>
        <Route path="/home" element={<Home />} />
      </Route>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
  )
    
  
}

export default Views
