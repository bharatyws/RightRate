import React from 'react'
import './download.css'
import ImgApple from '../../assets/app_store.png'
import ImgPlay from '../../assets/googple_play.png'

const Download = () => {
  return (
    <section className=' container download__app'>
        <p>Download our App : </p>
        <a href="AppStore"> <img src={ ImgApple } alt='app'/> </a>
        <a href="PlayStore">  <img src={ ImgPlay } alt='play'/></a>

      
    </section>
  )
}

export default Download