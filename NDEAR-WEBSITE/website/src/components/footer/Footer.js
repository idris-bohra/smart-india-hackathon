import React from 'react'
import img from '../../images/footer_img.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_div1'><p>Email: ndear-moe@gov.in</p>
        <h5>217-C, Shastri Bhawan<br/>
        New Delhi - 110001</h5>
        </div>

        <div className='footer_div2'>
            <img src={img} alt=''/>
            <br/>
            <span>
            Copyright © 2021 National Information Centre All Rights Reserved<br/>
            JavaScript must be enabled to access this site.<br/>
            Supports : Firefox, Google Chrome, Internet Explorer 10.0+, Safari
            </span>
        </div>
    </div>
  )
}

export default Footer