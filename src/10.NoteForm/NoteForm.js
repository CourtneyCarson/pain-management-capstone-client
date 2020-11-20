import React, { Component } from 'react'
//import PastTreatments from '../08.PastTreatments/PastTreatments'
import config from '../config'
// import { render } from 'react-dom'
import TokenService from '../services/token-service'


class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
  }

  handleSubmit = (event) => {
    console.log(this.props.tpId)
    const note = {
      title: this.state.title,
      content: this.state.content,
      trigger_point_id: this.props.tpId,
    }



    fetch(`${config.API_ENDPOINT}/notes/${note.trigger_point_id}`,
      {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
      })
      .then((res) => {
        console.log(note)
        if (!res.ok) {
          return res.json().then((error) => {
            throw error
          })
        }
        return res.json()
      })
      .then((note) => {

        // this.props.onAddNote(note)
        // window.location = '/past-treatments'
      })
      .catch((error) => {
        console.log({ error })
      })
  }

  render() {
    return (
      <section className="add-notes">
        <h4 className="add-notes-title">Add Notes</h4>
        <form className="add-notes-form" onSubmit={this.handleSubmit}>

          <input
            type="text"
            className="input"
            placeholder="write notes here"
            value={this.state.content}
            name="note"
            id="note"
            onChange={(event) => this.setState({ content: event.target.value })}
            required
          />
          <input
            type="text"
            className="input"
            placeholder="write title"
            value={this.state.title}
            name="title"
            id="title"
            onChange={(event) => this.setState({ title: event.target.value })}
            required
          />
          <button className="button">Submit</button>

        </form>
      </section>
    )
  }
}

export default NoteForm