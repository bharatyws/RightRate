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
                <li>Company</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
            </ul>
        </nav>
        
        <a href="" className='btn btn-primary'> Login/Signup</a>
    </section>
    
    
  )
}

export default Navbar