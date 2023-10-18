import React from 'react'
import home_img from '../../images/home_img1.png'
import SIH_img from '../../images/SIH_img.jpg'
import './Home.css'
import Navbar from '../Navbar/Navbar'


const Home = () => {
  return (<>
  <Navbar/>
    <div>
        <img className='home_img' src={home_img} alt=''/>
    </div>
    <div>
        <img className='sig_img' src={SIH_img} alt=''/>
    </div>
    </>
  )
}

export default Home
