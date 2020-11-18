import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage'

export default function HomePage(props) {
  return (


    <div className="home-page">
      <header>
        <h3>Select The Area You Are Feeling Pain</h3>
      </header>

      <section>
        {/* <h5>Select The Area You Are Feeling Pain</h5> */}
        {/* <!-- images of areas of pain - as buttons --> */}
        <div className='tp-button-links'>
          <Link to="/trigger-point/1">
            <img src="https://live.staticflickr.com/65535/50606433813_4ab5a6e946_w.jpg"
              alt="referral pattern for temporalis" />
          </Link>
          <Link to="/trigger-point/2">
            <img src="https://live.staticflickr.com/65535/50609334773_21b30a4971_w.jpg"
              alt="referral pattern masseter" />
          </Link>
          <Link to="/trigger-point/3">
            <img src="https://live.staticflickr.com/65535/50609334608_c5bf4cf2a6_w.jpg"
              alt="referral pattern middle trapezius" />
          </Link>
          <Link to="/trigger-point/4">
            <img src="https://live.staticflickr.com/65535/50609334823_a1b1177ff0_w.jpg"
              alt="referral pattern glute medius" />
          </Link>


          {/* extra links for padding  */}
          <Link to="/trigger-point/4">
            <img src="https://live.staticflickr.com/65535/50609334823_a1b1177ff0_w.jpg"
              alt="referral pattern glute medius" />
          </Link>
          <Link to="/trigger-point/4">
            <img src="https://live.staticflickr.com/65535/50609334823_a1b1177ff0_w.jpg"
              alt="referral pattern glute medius" />
          </Link>
          <Link to="/trigger-point/4">
            <img src="https://live.staticflickr.com/65535/50609334823_a1b1177ff0_w.jpg"
              alt="referral pattern glute medius" />
          </Link>
          <Link to="/trigger-point/4">
            <img src="https://live.staticflickr.com/65535/50609334823_a1b1177ff0_w.jpg"
              alt="referral pattern glute medius" />
          </Link>

        </div>
      </section>
    </div>
  )
}