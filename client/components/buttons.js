import React, {Component} from 'react'
import Modal from './modal'

class Buttons extends Component {
  //In React, constructors are mainly used for two purposes: It used for initializing the local state of the component by assigning an object to this. state. It used for binding event handler methods that occur in your component.
  //The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs. You can’t use this in a constructor until after you’ve called the parent constructor.
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
      //toggles show value in state
      show: !this.state.show,
      modalType: event.target.value
    })
  }

  render() {
    const buttonValues = [
      'needles',
      'cones',
      'twigs',
      'branches',
      'bark',
      'shape'
    ]

    return (
      <div>
        <div className="learn-buttons">
          {buttonValues.map(val => (
            <button
              key={val}
              className="toggle-button"
              value={val}
              onClick={event => this.showModal(event)}
              type="button"
            >
              {val}
            </button>
          ))}
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
