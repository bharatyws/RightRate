import React from 'react'
import './testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const client = [
  {
    id: 1,
    name: 'Manoj Gupta',
    title: 'CEO - MojoBoxx',
    review: ' Navaratri to New Year is the busiest season for our business. I often face financial challenges during that time because there is always a high demand for our products. I applied for a 20 lakh loan and it was instantly approved. The money was credited to my account in just 2 days. The loan amount helped me stock up on inventory and maintain a healthy balance sheet. The interest rate is also affordable, and the flexible tenure helped me manage my cash flow smoothly.',
  },
  {
    id: 2,
    name: 'Kriparam',
    title: 'HR - BHEL',
    review: 'I was looking to increase production and expand my distribution outside of Jalandhar when I came across Rightrate Finance. I was initially hesitant to try, but I decided to go for it as no one else was willing to give me credit. I am glad I did! The process was incredibly smooth and straightforward, and I received the 8 Lakh loan within 48 hours. The interest rates are also very competitive when compared to other lenders',
  },
  {
    id: 3,
    name: 'Mahesh Udopadhyay',
    title: 'Teacher - Ducat' ,
    review: 'I came across Rightrate ads on Facebook while I was looking for a loan to upgrade my printer and a few other pieces of equipment. The application process was quick and easy - it only took me 20-25 minutes to complete it. I was approved for the loan almost instantly, and the funds were disbursed within one day. I would highly recommend Rightrate to any businesses who are looking for quick loans without any hassle.',
  }
]

const Testimonial = () => {
  return (
    <section className="container testimonials__container">
      <h1>What our Client Says</h1>
      <p>Our clients send us a bunch of smiles with our service and we love them</p>
      <Swiper className="container container_testimonials"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      Pagination={{ clickable: true }}
      >
        { client.map(({id, title, name, review}) => {
        return(
          <SwiperSlide key={id} className="testimonial">
          {/* <div className="client_avatar">
            <img src={image} alt='Client'/>
            </div> */}
            <h5 className='client_name'>{name}</h5>
            <p className='client__title'>{title}</p>
            <small className='client_review'>
              {review}
            </small>
          
        </SwiperSlide>
        )}
        )}
      </Swiper>
    </section>
  )
}

export default Testimonial