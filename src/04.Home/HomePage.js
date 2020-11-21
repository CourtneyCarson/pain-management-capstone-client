import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage(props) {
  return (


    <div className="home-page">
      <header>
        <h3>Select The Area You Are Feeling Pain</h3>
      </header>

      <section>

        <div className='tp-button-links'>
          <Link to="/trigger-point/1">
            <img src="https://live.staticflickr.com/65535/50618518676_0b0b8a8b4e_w.jpg"
              alt="referral pattern for sub occipitals" />
          </Link>

          <Link to="/trigger-point/2">
            <img src="https://live.staticflickr.com/65535/50609334773_21b30a4971_w.jpg"
              alt="referral pattern masseter" />
          </Link>

          <Link to="/trigger-point/3">
            <img src="https://live.staticflickr.com/65535/50618983602_45e45bb0fc_w.jpg"
              alt="referral pattern levator scapulae" />
          </Link>

          <Link to="/trigger-point/4">
            <img src="https://live.staticflickr.com/65535/50609334608_22029f7b3d_w.jpg"
              alt="referral pattern middle trapezius" />
          </Link>

          <Link to="/trigger-point/5">
            <img src="https://live.staticflickr.com/65535/50617716018_02c89f7993_w.jpg"
              alt="referral patter iliocostalis" />
          </Link>

          <Link to="/trigger-point/6">
            <img src="https://live.staticflickr.com/65535/50609334823_2c272797d4_w.jpg"
              alt="referral pattern glute medius" />
          </Link>

        </div>
      </section>
    </div>
  )
}