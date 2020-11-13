import React, { Component } from 'react'
import './PastTreatments'
import NoteForm from '../10.NoteForm/NoteForm'
import config from '../config'
import TokenService from '../services/token-service'

class PastTreatments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      triggerpointsByUserId: []

    }
  }

  componentDidMount() {
    console.log(TokenService.getAuthToken())
    let URL = `${config.API_ENDPOINT}/tp/user/trigger-points`

    fetch(URL, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({
          triggerpointsByUserId: data,
        });
      })
      .catch((error) => console.log(error));
  }


  render() {
    console.log(this.state.triggerpointsByUserId)

    return (

      <div className="past-treatments-page">


        <header className="banner">
          <h1>Trigger Point Troubleshooter</h1>
        </header>
        <section>
          <div id="myDIV" className="header">
            <h2>Past Trigger Points</h2>
          </div>


          <div>
            {this.state.triggerpointsByUserId.map(tpByUser => {
              return (
                <ul>
                  <li>
                    <h3>{tpByUser.title}</h3>
                    <img src={tpByUser.image} alt="trigger point" />
                    <p>{tpByUser.content}</p>
                    <button >Add Notes</button>
                    <button >Delete</button>
                  </li>
                </ul>
              )
            })}
          </div>

          <NoteForm />
        </section>


      </div>
    )
  }
}

export default PastTreatments



     // set up state 
    // component did mount fetch req from get endpoint, set state res body 
    // this.state.notes - map over - generate on clicks while mapping 
    //onClick = {() => this.props.updateAddNotes(note.id)
    //}
    // onclick for button actions 


      //this.state.params - open string
    //this.state.params.triggerpontsByUserId - nothing
    //this.state - error null 
    //this.triggerpointsByUserId - undefined 