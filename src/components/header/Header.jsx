import React from 'react'
import './header.css'
import HeadImg from '../../assets/head_graphic.png'

const Header = () => {
  return (
    <header className='container header__container'>
        <section className="header header__text">
            <div className="head__content logo__text">
                <h2><span>RightRate</span>Finance</h2>
            </div>
            <div className="head__content">
            <div className="main__text">
                <h2>Go Beyond Ordinary</h2>
                <h1>Banking</h1>
            </div>
            <div className='extras'>
                <p>Get Upto <span>₹50000</span> in Just 3 Minutes</p>
                <a href="#" className='head__apply btn btn-primary'>Apply Now</a>
                <div className='powered__by'>
                    <p>Powered by RightRate & Trusted by</p>
                    <h3 className='trusted__number'><span>15000+</span> Individuals</h3>
                </div>
            </div>
            </div>
            
        </section>

        <section className="header header__graphics">
            <img src={HeadImg} alt='Head_carousal'/>
        </section>      
    </header>
  )
}

export default Header