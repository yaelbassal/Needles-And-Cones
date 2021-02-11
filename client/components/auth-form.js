import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <div className="form">
        <div id="welcome-message">
          {displayName === 'Login' ? (
            <div>
              {/* The user will see Welcome Back! */}
              <h2>Welcome Back!</h2>
            </div>
          ) : (
            <div>
              {/* // The user will see Create Your Account! */}
              <h2>Create Your Account!</h2>
            </div>
          )}
        </div>
        <div>
          <form onSubmit={handleSubmit} name={name}>
            <div>
              <label htmlFor="email">
                <medium>Email</medium>
              </label>
              <input name="email" type="text" />
            </div>
            <div>
              <label htmlFor="password">
                <medium>Password</medium>
              </label>
              <input name="password" type="password" />
            </div>
            <div>
              <button className="submit" type="submit">
                {displayName}
              </button>
            </div>
            {error && error.response && <div> {error.response.data} </div>}
          </form>
          <a className="googlebutton" href="/auth/google">
            {displayName} with Google
          </a>
        </div>
      </div>
      <div>
        <img
          className="loginAndSignUpImage"
          src="/LoginSignUpCone.png"
          alt="Image of Pine Cone"
        />
      </div>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
