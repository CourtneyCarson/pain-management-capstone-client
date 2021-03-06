import React, { Component } from 'react';
import './PastTreatments.css';
import NoteForm from '../10.NoteForm/NoteForm';
import config from '../config';
import TokenService from '../services/token-service';


class PastTreatments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      triggerpointsByUserId: [],
      Notes: []
    };
  }

  componentDidMount() {
    

    let URL = `${config.API_ENDPOINT}/tp/user/trigger-points/`;

    fetch(URL, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          triggerpointsByUserId: data,
        });
      })
      .catch((error) => console.log(error));

    /// get all notes by tp id
    URL = `${config.API_ENDPOINT}/notes`;

    fetch(URL, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          Notes: data,
        });
      })
      .catch((error) => console.log(error));
  }



  render() {

    return (
      <main>
        <div className="past-treatments-page">

          <header className="banner">
            <h1 className='past-tx-header'>Past Trigger Points</h1>
          </header>
          <section className='past-treatment'>

          
            <div className='saved-tp'>
              {this.state.triggerpointsByUserId.map((tpByUser, key) => {
                let Notes = this.state.Notes.filter(Note => {
                  return Note.trigger_point_id === tpByUser.id;

                });


                return (
                  <div className='past-tx-box'key={key}>
                    <div className='same'>
                      <h2 className='past-tx-title'>{tpByUser.title}</h2>
                      <img src={tpByUser.image} alt="trigger point" />
                      <p>{tpByUser.content}</p>
                    </div>
                    <div className='same'>
                      {Notes.map((note, key) => {
                        return (
                          //key={note.id} tried this key but didn't fix unique key id warning
                          <div className='notes-inside' key={key}>
                            <h3>{note.title}</h3>
                            <p>{note.content}</p>
                          </div>
                        );
                      })}
                    </div>

                    <NoteForm tpId={tpByUser.id} />


                  </div>

                );
              })}
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default PastTreatments;
