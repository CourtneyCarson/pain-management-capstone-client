import React, { Component } from 'react'
import PastTreatments from '../08.PastTreatments/PastTreatments'
import config from '.config'
import NoteForm from '../10.NoteForm/NoteForm'

class ToggleForm extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="toggle-form">
        <button onClick={() => this.handleClick()}>Toggle Me</button>
        {!this.state.show && <NoteForm/>}
    </div>
  )
}

}

export default ToggleForm