import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <section className='footer__info'>
                <div className="title__address">
                    <h2>RightRate</h2> 

                    <h3>RightRate Finance Pvt Ltd, <br />
                        Tower 1, 3rd Floor, Noida Tech Park, <br />
                        Noida, Uttar Pradesh - 123456</h3>

                    <a href=""><FaFacebookSquare/></a>
                    <a href=""><FaTwitterSquare/></a>

                    <p>&copy; All rights reserved by RightRate</p>
                </div>
                <div className="extra__links">
                    <div className="company">
                        <h4>Company</h4>
                        <p>
                            <a href="">About Us</a> <br />
                            <a href="">Privacy Policy</a> <br />
                            <a href="">Terms and Condition</a> <br />
                        </p>
                    </div>
                    <div className="contact">
                        <h4>Let's Talk</h4>
                        <p>
                            <a>Have any Doubts ?</a> <br />
                            <a>Feel free to</a> <br />
                            <a href="">Contact ME</a> <br />
                        </p>
                    </div>
                </div>
             
            </section>

            <div className="horizontal-line"></div>

            <section className='footer__credits'>
                <p>RightRate Finance is a platform that connects businesses with lending options offered by RBI-licensed NBFC partners. The loans offered on the platform are subject to the terms and conditions and loan approval process of the NBFC partners</p>
            </section>
            </div>

            
    </footer>
  )
}

export default Footer