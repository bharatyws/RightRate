import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <section className="navbar">
        <div className="navbar__logo">
            <h2><span>RightRate</span>Finance</h2>
        </div> 

        <nav>
            <ul>
                <li><a href="#"> Company</a></li>
                <li><a href="#"> Intrests</a></li>
                <li><a href="#"> EMI Calculator</a></li>
                <li><a href="#"> Awards</a></li>
            </ul>
        </nav>
        
        <a href="" className='btn btn-primary'> Login/Signup</a>
    </section>
    
    
  )
}

export default Navbar