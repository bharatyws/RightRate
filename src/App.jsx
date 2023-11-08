import React from 'react'
import Header from './components/header/Header'
import Mover from './components/mover/Mover'
import Applynow from './components/applynow/Applynow'
import WhyRightrate from './components/whyRightrate/WhyRightrate'
import Eligibility from './components/eligibility/Eligibility'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Testimonials from './components/testimonials/Testimonials'
import Faquestions from './components/faquestions/Faquestions'
import Emicalculator from './components/emicalculator/Emicalculator'
import Details from './components/details/Details'
import Reasons from './components/reasons/Reasons'
import Download from './components/download/Download'
import Achievements from './components/achievements/Achievements'

const App = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Mover/>
        <Applynow/>
        <WhyRightrate/>
        <Download/>
        <Emicalculator/>
        <Achievements/>
        <Eligibility/>
        <Download/>
        <Details/>
        <Download/>
        <Reasons/>
        <Testimonials/>
        <Faquestions/>
        <Download/>
        <Footer/>
    </>
  )
}

export default App