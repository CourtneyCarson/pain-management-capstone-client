import React from 'react'
import './HowTo'

export default function HowTo(props) {
  return (
    // <!-- How To Page -->
<div className="how-to-page">

<header role="banner">
    <h1>Trigger Point Troubleshooter</h1>
  </header>
<main role="main">
  <section> 
    <header>
        <h3>Techniques To Treat Trigger Points</h3>
          <img src="example.jpg" alt="trigger point "/>
    </header>
  </section>
    <section>
      <h5>Start Of Walkthrough:</h5>
      <ul>
        <img src="https://live.staticflickr.com/65535/50607295067_e7f5486272_w.jpg" alt="trigger point "/>
          <li>Supported Knuckles </li>
        {/* <img src="example.jpg" alt="trigger point "/>
          <li> Supported Fingers </li> */}
        <img src="https://live.staticflickr.com/65535/50607179136_764b077fb3_w.jpg"  alt="trigger point "/>
          <li>Supported Fingers </li>
        <img src="https://live.staticflickr.com/65535/50607295002_571371bbe2_w.jpg" alt="trigger point "/>
          <li>Knuckles </li>
          </ul>
  </section>
</main>

</div>
  )
}