import React, { Component } from 'react'
import './TriggerPoint'
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



  render() {
console.log(this.state.TriggerPoint)
let id = this.props.match.params.id

    return (
      <div className="trigger-point-page">

        <main role="main">
          <form className="trigger-point-form" onSubmit={this.handleSubmit}>
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
          </form>
        </main>

      </div>
    )
  }
}
export default TriggerPoint