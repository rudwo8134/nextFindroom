import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Wrapper = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default Wrapper
