import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {HomeOptions} from './home-options'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, name} = props

  return (
    <div className="home-outer-container">
      {name ? (
        <div>
          <h2 className="home-greeting">
            Hello, {name}! What would you like to do?
          </h2>
          <HomeOptions />
        </div>
      ) : (
        <div>
          <h2 className="home-greeting">
            Hello, {email}! What would you like to do?
          </h2>
          <HomeOptions />
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
