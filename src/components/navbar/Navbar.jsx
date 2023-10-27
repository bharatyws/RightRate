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
                <li><a href="#"> Link1</a></li>
                <li><a href="#"> Link2</a></li>
                <li><a href="#"> Link3</a></li>
                <li><a href="#"> Link4</a></li>
            </ul>
        </nav>
        
        <a href="" className='btn btn-primary'> Login/Signup</a>
    </section>
    
    
  )
}

export default Navbar