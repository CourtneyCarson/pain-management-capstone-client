import React, { Component } from 'react'
import './PastTreatments'
import NoteForm from '../10.NoteForm/NoteForm'
import config from '../config'
import TokenService from '../services/token-service'

class PastTreatments extends Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    console.log(TokenService.getAuthToken())
    let URL = `${config.API_ENDPOINT}/tp/user/trigger-points`;

    fetch(URL, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // this.setState({
        //   notes: data,
        // });
      })
      .catch((error) => console.log(error));
  }


  render() {
    console.log(this.state.notes)
    // set up state 
    // component did mount fetch req from get endpoint, set state res body 
    // this.state.notes - map over - generate on clicks while mapping 
    //onClick = {() => this.props.updateAddNotes(note.id)
    //}
    // onclick for button actions 
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
              <button >Add Notes</button>
              <button >Delete</button>
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