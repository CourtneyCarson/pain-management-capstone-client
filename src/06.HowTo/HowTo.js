import React from 'react'
import './HowTo.css'

export default function HowTo(props) {
  return (

    <div className='how-to-page'>

      <header className='banner'>
        <h1>Techniques To Treat Trigger Points</h1>
      </header>
      
      <section className='how-to-section'>
        <div className='how-to-paragraph'>
          <h3> Finding A Trigger Point </h3>
          <p> When you find a trigger point you will feel the pain ignite in the referral area, when the trigger point
          releases the pain will subside. As you work you should feel the pain gradually subsiding, and the trigger point
          softening. Use deep pressure, but aim for a pain level of 5 out of 10. Often trigger point pain will subside
          within a few minutes, if you find you are not getting pain relief you may be working the wrong spot. It is best to 
          support your fingers or knucles as shown below to avoid fatigue or injury of the hands.
        </p>
        </div>

        <div className='how-to-paragraph'>
          <h3> Traditional Technique</h3>
          <p> Using deep pressure, press and hold a trigger point until you feel the pain begin to subside.
          After 30 seconds, take a rest and begin again. It is not recommended to work on the same area for more
          than a few minutes at a time. If you still feeling pain, come back to that area a few times per day
          until the pain subsides.
          </p>
        </div>

        <div className='how-to-paragraph'>
          <h3> Modern Technique </h3>
          <p>Using deep pressure, massage over each trigger point 10-12 times moving in one direction.
          By moving over the trigger point repeatedly you are moving blood and lymph fluid through the
          tissue moving out anything stagnant. Intermittent moving pressure allows for a higher pain tolerance.
          Rather than sliding your fingers across your skin, work deeply and slowly moving the tissue with your fingers.
        </p>
        </div>
      </section>
      <div>
        <img src="https://live.staticflickr.com/65535/50607179136_db57fc8acd_w.jpg" alt="trigger point " />
        <img src="https://live.staticflickr.com/65535/50607295067_35cd959ccf_w.jpg" alt="trigger point " />
      </div>

    </div>
  )
}