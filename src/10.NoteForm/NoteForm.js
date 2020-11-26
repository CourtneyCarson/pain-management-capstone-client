import React, { Component } from 'react';
//import PastTreatments from '../08.PastTreatments/PastTreatments'
import config from '../config';
// import { render } from 'react-dom'
import TokenService from '../services/token-service';
import './NoteForm.css';


class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.props.tpId);
    const note = {
      title: this.state.title,
      content: this.state.content,
      trigger_point_id: this.props.tpId,
    };


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
        console.log(note);
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((note) => {

      })
      .catch((error) => {
        console.log({ error });
      });
  };

  render() {
    return (
      <section className='add-notes'>
        {/* <h4 className='add-notes-title'>Add Notes</h4> */}
        <form className='add-notes-form' onSubmit={this.handleSubmit}>

          <label> Title
        <input
              type='text'
              className='input-title'
              placeholder='write title'
              value={this.state.title}
              name='title'
              // id='title'
              onChange={(event) => this.setState({ title: event.target.value })}
              required
            /></label>

          <label> Note
          <input
              type="text"
              className='input-note'
              placeholder='write notes here'
              value={this.state.content}
              name='note'
              // id='note'
              onChange={(event) => this.setState({ content: event.target.value })}
              required
            />
          </label>
          <button className='note-button'>Add Note</button>

        </form>
      </section>
    );
  }
}

export default NoteForm;