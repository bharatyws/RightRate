import React from 'react'
import './navbar.css'
import menu from '../../assets/menu.png'
const Navbar = () => {
  return (
    <section className="navbar">
        <div className="navbar__logo">
            <h2><span>RightRate</span>Finance</h2>
        </div> 

        <nav className='navigation-menu'>
            <ul>
                <li><a href=".deatils"> Company</a></li>
                <li><a href=".footer"> Intrests</a></li>
                <li><a href=".emicalculator"> EMI Calculator</a></li>
                <li><a href=".awards"> Awards</a></li>
            </ul>
            
        </nav>
        <a href="login" className='btn btn-primary'> Login/Signup</a>
        
        <button className='hamburger'><img src={menu} className='menu_icon' alt=""  /></button>
    </section>
    
    
  )
}

export default Navbar