import React from 'react'
import './AboutPage.css'

export default function AboutPage(props) {
  return (
    <div className='about-page'>

      <header className='banner'>
        <h1>What is a Trigger Point?</h1>
        <img src="https://live.staticflickr.com/65535/50607295102_041791c53c_w.jpg" alt="trigger point" />

      </header>

      <section className='about-page-section'>

        <div className='about-paragraph'>
          <p>A Trigger Point is a hyper sensitive area in muscular tissue that you can often feel as a nodule.
          Upon compression this area will be painful locally, and can cause pain that is felt elsewhere in the body,
          this is called a referred pain pattern.  This is useful when tracking down the source of pain, as once
          compressed you will feel the pain radiate to the affected referral area.
        </p>
        </div>

        <div className='about-paragraph-2'>
          <p>You should not be too focused on finding a nodule as they are often smaller than you’d imagine,
          and instead focus on the area itself feeling tender to the touch, and causing a referral pain pattern
          to occur, this will give confirmation that you are in the correct area.
        </p>
        </div>

      </section>

    </div>
  )
}