import React, { Component } from 'react'
import './TriggerPoint.css'
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'
import config from '../config'

class TriggerPoint extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      triggerpointId: "",
      TriggerPoint: {},
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { triggerpointId } = event.target
    this.setState({ error: null })
    console.log(triggerpointId.value)
    let currentUserId = TokenService.getUserId()
    console.log(currentUserId)
    this.postTriggerPoint(triggerpointId.value)
  }

  componentDidMount() {
    console.log(TokenService.getAuthToken())
    let id = this.props.match.params.id

    let URL = `${config.API_ENDPOINT}/tp/${id}`

    fetch(URL, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({
          TriggerPoint: data,
        });
      })
      .catch((error) => console.log(error));
  }

  // post req - to save trigger point to users account 
  postTriggerPoint(trigger_points_id) {
    let id = this.props.match.params.id
    let URL = `${config.API_ENDPOINT}/tpusers`

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
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }


  render() {
    console.log(this.state.TriggerPoint)
    let id = this.props.match.params.id

    return (
      <div className="trigger-point-page">

        <main role="main">
          <div className="trigger-point-div" onSubmit={this.handleSubmit}>
            <section>
              <header>
                <h3>Your Pain May Be Coming From This Trigger Point:{id}</h3>
              </header>
            </section>
            <section>


              <img src={this.state.TriggerPoint.image} alt="tp" />
              <h5>{this.state.TriggerPoint.title}</h5>
              <p> {this.state.TriggerPoint.content} </p>
              <a href="/how-to">How To Page</a>
            </section>
            <input type='hidden' name='triggerpointId' defaultValue={id}></input>
            <button type='submit'>Save</button>
            <Link to="/home">
              Back
          </Link>
          </div>
        </main>

      </div>
    )
  }
}
export default TriggerPoint