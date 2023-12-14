import React from 'react'
import './header.css'
import HeadImg from '../../assets/head_graphic.png'

const Header = () => {
  return (
    <header className='container header__container'>
        <div className="main__container">
        <section className="header header__text">
            <div className="head__content">
                <div className="main__text">
                    <h2>Go Beyond Ordinary</h2>
                    <h1>Banking</h1>
                </div>
                <div className='extras'>
                    <p>Get Upto <span>₹50000</span> in Just 3 Minutes</p>
                    <div className="btn__container">
                        <a href="/" className='head__apply btn btn-primary'>Apply Now</a>
                        <a href="/" className='head__apply btn btn-outlined'>Check Eligibility</a>
                    </div>
                    <div className='powered__by'>
                        <p>Powered by RightRate & Trusted by</p>
                        <p className='trusted__number'><span>15000+</span> Individuals</p>
                    </div>
                </div>
            </div>
            
        </section>

        <section className="header header__graphics">
            <img src={HeadImg} alt='Head_carousal'/>
        </section> 
        </div>
             
    </header>
  )
}

export default Header