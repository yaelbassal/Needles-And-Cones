import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Learn = props => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(Learn)

/**
 * PROP TYPES
 */
Learn.propTypes = {
  email: PropTypes.string
}
