import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './logins/Login'
import Signup from './logins/Signup'

const Views = () => {
  return (
    <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default Views