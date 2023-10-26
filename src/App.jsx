import React from 'react'
import Header from './components/header/Header'
import Mover from './components/mover/Mover'
import Applynow from './components/applynow/Applynow'
import WhyRightrate from './components/whyRightrate/WhyRightrate'
import Eligibility from './components/eligibility/Eligibility'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Mover/>
        <Applynow/>
        <WhyRightrate/>
        <Eligibility/>
    </>
  )
}

export default App