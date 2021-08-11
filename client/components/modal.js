import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ModalCloseButton} from './modal-close-button'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.onClose = this.onClose.bind(this)
  }
  //1. pass value back back to Buttons component by adding it to props. onClose becomes a value that we can use.
  //2. then pass the whole event object back to Buttons component by adding onClose to Modal tag. This makes it so this.props.show becomes false.
  onClose(event) {
    this.props.onClose && this.props.onClose(event)
  }

  render() {
    const modalType = this.props.modalType
    if (!this.props.show) {
      return null
    } else {
      if (modalType === 'needles') {
        const needles = this.props.props.props.needles_description
        const needlesImage = this.props.props.props.needles_image
        return (
          <div className="modal">
            <h3>NEEDLES</h3>
            <img src={window.location.origin + needlesImage} />
            <div>{needles}</div>
            <ModalCloseButton onClickFunc={this.onClose} />
          </div>
        )
      }
      if (modalType === 'cones') {
        const cones = this.props.props.props.cones_description
        const conesImage = this.props.props.props.cones_image
        return (
          <div className="modal">
            <h3>CONES</h3>
            <img src={window.location.origin + conesImage} />
            <div>{cones}</div>
            <ModalCloseButton onClickFunc={this.onClose} />
          </div>
        )
      }
      if (modalType === 'twigs') {
        const twigs = this.props.props.props.twigs_description
        const twigsImage = this.props.props.props.twigs_image
        return (
          <div className="modal">
            <h3>TWIGS</h3>
            <img src={window.location.origin + twigsImage} />
            <div>{twigs}</div>
            <ModalCloseButton onClickFunc={this.onClose} />
          </div>
        )
      }
      if (modalType === 'branches') {
        const branches = this.props.props.props.branches_description
        const branchesImage = this.props.props.props.branches_image
        return (
          <div className="modal">
            <h3>BRANCHES</h3>
            <img src={window.location.origin + branchesImage} />
            <div>{branches}</div>
            <ModalCloseButton onClickFunc={this.onClose} />
          </div>
        )
      }
      if (modalType === 'bark') {
        const bark = this.props.props.props.bark_description
        const barkImage = this.props.props.props.bark_image
        return (
          <div className="modal">
            <h3>BARK</h3>
            <img src={window.location.origin + barkImage} />
            <div>{bark}</div>
            <ModalCloseButton onClickFunc={this.onClose} />
          </div>
        )
      }
      if (modalType === 'shape') {
        const shape = this.props.props.props.shape_description
        const shapeImage = this.props.props.props.shape_image
        return (
          <div className="modal">
            <h3>SHAPE</h3>
            <img src={window.location.origin + shapeImage} />
            <div>{shape}</div>
            <ModalCloseButton onClickFunc={this.onClose} />
          </div>
        )
      }
    }
  }
}

export default Modal

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
}

//https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6
