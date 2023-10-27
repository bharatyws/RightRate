import React from 'react'
import Header from './components/header/Header'
import Mover from './components/mover/Mover'
import Applynow from './components/applynow/Applynow'
import WhyRightrate from './components/whyRightrate/WhyRightrate'
import Eligibility from './components/eligibility/Eligibility'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Mover/>
        <Applynow/>
        <WhyRightrate/>
        <Eligibility/>
        <Testimonials/>
        <Footer/>
    </>
  )
}

export default App