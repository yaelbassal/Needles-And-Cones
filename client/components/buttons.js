import React, {Component} from 'react'
import Modal from './modal'

class Buttons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      modalType: null
    }
    this.showModal = this.showModal.bind(this)
  }

  showModal(event) {
    this.setState({
      show: !this.state.show,
      modalType: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="learn-buttons">
          <button
            className="toggle-button"
            value="needles"
            onClick={event => this.showModal(event)}
          >
            needles
          </button>{' '}
          <button
            className="toggle-button"
            value="cones"
            onClick={event => this.showModal(event)}
          >
            cones
          </button>{' '}
          <button
            className="toggle-button"
            value="twigs"
            onClick={event => this.showModal(event)}
          >
            twigs
          </button>{' '}
          <button
            className="toggle-button"
            value="branches"
            onClick={event => this.showModal(event)}
          >
            branches
          </button>{' '}
          <button
            className="toggle-button"
            value="bark"
            onClick={event => this.showModal(event)}
          >
            bark
          </button>{' '}
          <button
            className="toggle-button"
            value="shape"
            onClick={event => this.showModal(event)}
          >
            shape
          </button>{' '}
        </div>
        <Modal
          onClose={this.showModal}
          show={this.state.show}
          modalType={this.state.modalType}
          props={this.props}
        />
      </div>
    )
  }
}

export default Buttons
