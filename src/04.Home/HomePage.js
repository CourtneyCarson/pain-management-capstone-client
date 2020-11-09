import React from 'react'
import './HomePage'

export default function HomePage(props) {
  return (

    // <!-- Home Page -->
    <div className="home-page">
  
      <main role="main">
        <section>
          <header>
            <h3>Get to the root of your pain</h3>
            <p>*placeholder for image of trigger point on body*</p>
          </header>
        </section>
        <section>
          <h5>Select The Area You Are Feeling Pain</h5>
          {/* <!-- images of areas of pain - as buttons --> */}
          <input type="image" alt="image" src="http://example.com/path/to/image.png" />
          <input type="image" alt="image" src="http://example.com/path/to/image.png" />
          <input type="image" alt="image" src="http://example.com/path/to/image.png" />
          <input type="image" alt="image" src="http://example.com/path/to/image.png" />
        </section>
      </main>
      <footer role="content-info">Footer</footer>
    </div>
  )
}