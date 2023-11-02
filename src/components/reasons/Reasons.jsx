import React from 'react'
import './reasons.css'
import { GiSelfLove } from 'react-icons/gi'
import { GiBookshelf } from 'react-icons/gi'
import { IoBusinessOutline } from 'react-icons/io5'
import { CgMoreR } from 'react-icons/cg'

const Reasons = () => {
  return (
    <section className="container reasons__container">
        <h1>Reasons to Buy</h1>
        <p>You can reach out to RightRate for many reasons</p>

        <div className="reasons__icons__container">
            <div className="reason__icon">
                <GiSelfLove/>
                <p>Marriage</p>
                </div>
            <div className="reason__icon">
                <GiBookshelf/>
                <p>Studies</p>
                </div>
            <div className="reason__icon">
                <IoBusinessOutline/>
                <p>Business</p>
                </div>
            <div className="reason__icon">
                <CgMoreR/>
                <p>Many More...</p>
                </div>
        </div>
    </section>
  )
}

export default Reasons