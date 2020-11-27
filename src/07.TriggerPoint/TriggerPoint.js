import React, { Component } from 'react';
import './TriggerPoint.css';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';
import config from '../config';
import HomePage from '../04.Home/HomePage';

class TriggerPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      triggerpointId: "",
      TriggerPoint: {},
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { triggerpointId } = event.target;
    this.setState({ error: null });
    // console.log(triggerpointId.value)
    let currentUserId = TokenService.getUserId();
    // console.log(currentUserId)
    this.postTriggerPoint(triggerpointId.value);
    this.props.history.push('/past-treatments');
  };

  componentDidMount() {
    // console.log(TokenService.getAuthToken());
    let id = this.props.match.params.id;

    let URL = `${config.API_ENDPOINT}/tp/${id}`;

    fetch(URL, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          TriggerPoint: data,
        });
      })
      .catch((error) => console.log(error));
  }

  // post req - to save trigger point to users account 
  postTriggerPoint(trigger_points_id) {
    let id = this.props.match.params.id;
    let URL = `${config.API_ENDPOINT}/tpusers`;

    return fetch(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        trigger_points_id,
      }),
    })
      // errors + if try to save duplicates to account
      .then(res =>
        (!res.ok)
          ? res.json().then(e => this.setState({ error: e })
          )
          : res.json()
    )
      .catch(err => {
        console.log(err)
        this.setState({ error: err });
    })
  }


  render() {
    let id = this.props.match.params.id;

    return (
      <div className="trigger-point-page">

        <form className="trigger-point-div" onSubmit={this.handleSubmit}>
          <section>
            <header>
              <h3>Your Pain May Be Coming From This Trigger Point:</h3>
            </header>
          </section>

          <section className='trigger-point-results'>
            <div className='trigger-point-image-title'>
              <h3>{this.state.TriggerPoint.title}</h3>
              <img src={this.state.TriggerPoint.image} alt="tp" />
            </div>

            <div className='trigger-point-content'>
              <p> {this.state.TriggerPoint.content}
              </p>

            </div>
          </section>

          <div>
            <input type='hidden' name='triggerpointId' defaultValue={id}></input>
            <button className='save-button' type='submit'> Save </button>
            <Link to="/home">
              Back
          </Link>
            <p>
              <a href="/how-to"> Learn How To Treat Trigger Points </a>
            </p>
          </div>

        </form>
      </div>
    );
  }
}
export default TriggerPoint;