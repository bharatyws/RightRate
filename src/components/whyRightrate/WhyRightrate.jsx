import React from 'react'
import './whyRightrate.css'
import {FaClock} from 'react-icons/fa'
import {BsCalendarDateFill} from'react-icons/bs'
import {BsFillLightningFill} from 'react-icons/bs'
import {BsPatchCheckFill} from 'react-icons/bs'
import {MdHomeWork} from 'react-icons/md'
import {FaMoneyBillTransfer} from 'react-icons/fa6'

const WhyRightrate = () => {
  return (
    <section className="whyrightrate__container">
        <div className="whyrightrate__title">
            <h2>Why Choose <span>RightRate</span> ?</h2>
        </div>
        <div className="whyrightrate__content">
            <div className="content__items"><span className='icons'><FaClock/></span><p>Apply in Few Minutes</p></div>
            <div className="content__items"><span className='icons'><BsCalendarDateFill/></span><p>Get Money in Few Days</p></div>
            <div className="content__items"><span className='icons'><BsFillLightningFill/></span><p>Fast Approval</p></div>
            <div className="content__items"><span className='icons'><MdHomeWork/></span><p>No Branch Visit</p></div>
            <div className="content__items"><span className='icons'><FaMoneyBillTransfer/></span><p>Easy Tenure</p></div>
            <div className="content__items"><span className='icons'><BsPatchCheckFill/></span><p>ISO Certified</p></div>
        </div>
    </section>
  )
}

export default WhyRightrate