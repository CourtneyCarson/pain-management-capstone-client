import React, { Component } from 'react'
import './TriggerPoint'
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'


class TriggerPoint extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      params: {
        triggerpointId: "",
      },
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { triggerpointId } = event.target
    this.setState({ error: null })
    console.log(triggerpointId.value)
    let currentUserId = TokenService.getUserId()
    console.log(currentUserId)
    // AuthApiService.postUser({
    //   email: registerUsername.value,
    //   password: registerPassword.value,
    // })

    //   .then(response => {
    //     registerUsername.value = ''
    //     registerPassword.value = ''
    //     window.location = '/home'
    //   })
    //   .catch(res => {
    //     this.setState({ error: res.error })
    //   })
  }



  render() {

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
              {/* {this.state.params.triggerpointId.map(tpId => {
                return (
                  <ul>
                    <p>{tpId.title}</p>
                   </ul>
                 )
               })} */}



              <img src="https://loremflickr.com/750/300/landscape?random={id}" />
              <p> {id.content}Sriracha coloring book irony, waistcoat leggings thundercats synth banh mi.
              Franzen fashion axe twee organic. Pinterest taxidermy craft beer tattooed.
              Readymade vice franzen, green juice you probably haven't heard of them bitters
              fixie live-edge semiotics raclette. Distillery meh butcher biodiesel keffiyeh pinterest.
              Intelligentsia irony roof party lumbersexual kickstarter blue bottle. Lo-fi wolf actually 8-bit,
              +1 meh seitan literally cronut mlkshk flannel occupy tofu post-ironic VHS. </p>
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