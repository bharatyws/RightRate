import React from 'react'
import './achievements.css'

const Achievements = () => {
  return (
    <section className='achievements__container'>
        <h1>Achievement Figures</h1>
        <p>We achieve some numbers, because you are more than numbers to us</p>
        <div className="numbers__container">
             <div className="cust__num num">
                <h1>54,63,876</h1>
                <p>Satisfied Customers</p>
            </div>
            <div className="partner__num num">
                <h1>20+</h1>
                <p>Trusted Partners</p>
            </div>
            <div className="amount__num num">
                <h1>$782 Cr.</h1>
                <p>Worth of Credit Distributed</p>
            </div>
        </div>
        
    </section>
  )
}

export default Achievements