import React from 'react'
import './AboutPage.css'

export default function AboutPage(props) {
  return (
    // <!-- About Page -->
    <div className='about-page'>

      <header className='banner'>
        <h1>What is a Trigger Point?</h1>
        <img src="https://live.staticflickr.com/65535/50607295102_041791c53c_w.jpg" alt="trigger point" />
        <h3>A Trigger Point is tightened area of a muscle and myofascial tissue</h3>

      </header>

      <section className='about-page-section'>
        
        <div className='about-paragraph'>
          <p>Shabby chic drinking vinegar cronut schlitz fingerstache. Post-ironic
          migas waistcoat crucifix dreamcatcher bushwick pug bitters. Normcore 
          whatever 8-bit scenester fingerstache synth drinking vinegar marfa woke VHS.
          Seitan lomo single-origin coffee 3 wolf moon messenger bag lo-fi pok
          pok. Flexitarian kinfolk stumptown cloud bread seitan. Put a bird on
          it hexagon scenester authentic farm-to-table bushwick mlkshk pop-up
          try-hard freegan. Helvetica kogi fanny pack single-origin coffee,
          mumblecore shoreditch squid thundercats stumptown literally.
        </p>
        </div>

        <div className='about-paragraph-2'>
          <p>Seitan lomo single-origin coffee 3 wolf moon messenger bag lo-fi pok
          pok. Flexitarian kinfolk stumptown cloud bread seitan. Put a bird on
          it hexagon scenester authentic farm-to-table bushwick mlkshk pop-up
          try-hard freegan. Helvetica kogi fanny pack single-origin coffee,
          mumblecore shoreditch squid thundercats stumptown literally.
        </p>
        </div>
        
      </section>



    </div>
  )
}