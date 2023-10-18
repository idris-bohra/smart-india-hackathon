import React from 'react'
import flagIMG from '../../images/flag.png'
import ashoka from '../../images/logo1.png'
import './GovermentOfIndia.css'

const GovermentOfIndia = () => {
  return (
    <div className="gov_wrapper">
        <div className='gov_container'>
            <img src={flagIMG} alt="Flag Image"/>  <span>Government of India</span>
        </div>
        <div className='gov_container_second_header'>
            <img src={ashoka} alt="Flag Image"/>  
            <div className='ndear_text'>
              <span className='ndear_text_1'>National Digital Education Architecture
              </span><br/>
              <span className='ndear_text_2'>Digital Infrastructure for the education ecosyste</span>
            </div>
        </div>
    </div>
  )
}

export default GovermentOfIndia