import React, { Component } from 'react'
import './PastTreatments.css'
import NoteForm from '../10.NoteForm/NoteForm'
import config from '../config'
import TokenService from '../services/token-service'

class PastTreatments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      triggerpointsByUserId: [],
      Notes: []
    }
  }

  componentDidMount() {
    // console.log(TokenService.getAuthToken())
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

    /// get all notes by tp id
    URL = `${config.API_ENDPOINT}/notes`

    fetch(URL, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({
          Notes: data,
        });
      })
      .catch((error) => console.log(error));
  }

  ///// Delete Notes 
  // handleClickDelete = (id) => {

  //   fetch(`${config.API_ENDPOINT}/notes/${id}`,
  //     {
  //       method: 'DELETE',
  //       headers: { 'content-type': 'application/json' },
  //     })
  //     .then(response => {
  //       if (!response.ok)
  //         return response.json().then(e => Promise.reject(e))
  //     })
  //     .then((id) => {
  //       window.location = '/past-treatments'
  //       this.setState({
  //         Notes: [
  //           ...this.state.notes,
  //           note
  //         ]
  //       })
  //     })
  //     .catch(error => {
  //       console.error({ error })
  //     })
  // }








  render() {
    console.log(this.state.triggerpointsByUserId)

    return (

      <div className="past-treatments-page">

        <header className="banner">
          <h2>Past Trigger Points</h2>
        </header>
        <section className='past-treatment'>
          <div className='header'>
            <h5>Add notes to saved trigger points </h5>
          </div>

          <div className='saved-tp'>
            {this.state.triggerpointsByUserId.map(tpByUser => {
              let Notes = this.state.Notes.filter(Note => {
                return Note.trigger_point_id == tpByUser.id
              })
              console.log(tpByUser.id)


              return (
                <p>
                  <h3>{tpByUser.title}</h3>
                  <img src={tpByUser.image} alt="trigger point" />
                  <p>{tpByUser.content}</p>
                  <div>
                    {Notes.map(note => {
                      return (
                        <div>
                          <p>{note.title}</p>
                          <p>{note.content}</p>
                        </div>
                      )
                    })}
                  </div>

                  <NoteForm tpId={tpByUser.id} />

                  {/* <button
                      // className='delete'
                      // type='button'
                      // name='completed'
                    // onClick={(event, id) => this.handleClickDelete(note.id)}
                    >
                      Delete
                    </button> */}
                </p>

              )
            })}
          </div>
        </section>
      </div>
    )
  }
}

export default PastTreatments
