import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchJournal} from '../store/journal'

/**
 * COMPONENT
 */
class Journal extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getJournal()
  }

  render() {
    const user = this.props.user
    const journal = this.props.journal[0]
    console.log('this is journal', journal)

    return (
      <div>
        <div>
          <h3>Welcome, {user.name}</h3>
        </div>
        <div>
          {journal ? (
            <h1>{journal.createdAt}</h1>
          ) : (
            <p>Journal Information Are Not Currently Available</p>
          )}
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    journal: state.journal
  }
}

const mapDispatch = dispatch => {
  return {
    getJournal: () => dispatch(fetchJournal())
  }
}

export default connect(mapState, mapDispatch)(Journal)

/**
 * PROP TYPES
 */
Journal.propTypes = {
  email: PropTypes.string
}

//next steps:
//1. style journal page
//add functionality to add new entries/put request
//add functionality to take away entries.
