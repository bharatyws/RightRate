import React from 'react'
import './applynow.css'
import Steps from '../../assets/steps_graphic.jpg'

const Applynow = () => {
  return (
    <section className='container applynow__container'>
        <h1>Apply now in 3 easy steps</h1>
        <div className="applynow__sections">
            <div className="applynow__graphics">
                <img src={Steps} />
            </div>
            <div className="applynow__text">
                <div className="steps"><span className='one'>01</span><p>Enter your personal, business & bank details to get a fair loan offer</p></div>
                <div className="steps"><span className='one'>02</span><p>Accept the loan offer & complete your documentation & KYC</p></div>
                <div className="steps"><span className='one'>03</span><p>Choose from flexible repayment options and start receiving funds</p></div>
            </div>
        </div>
        
    </section>
  )
}

export default Applynow