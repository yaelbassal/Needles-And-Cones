import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, name} = props

  return (
    <div>
      {name != null || name != undefined ? (
        <div>
          <h3>Welcome, {name}</h3>
        </div>
      ) : (
        <div>
          <h3>Welcome, {email}</h3>
        </div>
      )}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    name: state.user.name
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 * PropTypes makes sure the props objects pass the * correct types to a component
 */

UserHome.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string
}
