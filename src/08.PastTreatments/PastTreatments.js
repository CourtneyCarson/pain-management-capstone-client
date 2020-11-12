import React, {Component} from 'react'
import './PastTreatments'
import NoteForm from '../10.NoteForm/NoteForm'

class PastTreatments extends Component {
  render() {
    
    return (
    
      <div className="past-treatments-page">

        <main role="main">
          <header role="banner">
            <h1>Trigger Point Troubleshooter</h1>
          </header>
          <section>
            <div id="myDIV" className="header">
              <h2>Past Trigger Points</h2>
            </div>

            <ul id="myUL">
              <li>Trigger Point</li>
              <button type='submit'>Add Notes</button>
              <button type='submit'>Delete</button>
              <li className="checked">Trigger Point</li>
              <button type='submit'>Add Notes</button>
              <button type='submit'>Delete</button>
              <li>Trigger Point</li>
              <button type='submit'>Add Notes</button>
              <button type='submit'>Delete</button>
              <li>Trigger Point</li>
              <button type='submit'>Add Notes</button>
              <button type='submit'>Delete</button>
            </ul>
            <NoteForm />
          </section>
        </main>

   
      </div>
    )
  }
}

export default PastTreatments