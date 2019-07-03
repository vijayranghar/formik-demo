import React, { Component } from 'react'
import Checkbox from 'unify-react-mobile/build/Checkbox'
import MudikTNC from '../MudikTNC'

class TermsAndConditions extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      checkedAgreement: false,
      displayTnc: false,
    }
  }
  handleChangeAgreement = () => {
    this.setState({
      checkedAgreement: !this.state.checkedAgreement
    })
  }
  toggleDisplayTnc = () => {
    this.setState({
      displayTnc: !this.state.displayTnc
    })
  }
  render () {
    //const { label } = this.props
    return (
      <div className="form__agreement--wrapper">
        <Checkbox
          value="Checkbox value"
          id="agreement"
          name="agreement"
          useLabel
          checked={this.state.checkedAgreement}
          onChange={this.handleChangeAgreement}
        />
        <label htmlFor="agreement" className="text">
          Dengan ini saya setuju dengan 
          <a onClick={this.toggleDisplayTnc}>Syarat dan Ketentuan </a>
           yang berlaku.
        </label>

        <MudikTNC
          display={this.state.displayTnc}
          toggleDisplay={this.toggleDisplayTnc}
        />
    </div>
    )
  }
}

export default TermsAndConditions