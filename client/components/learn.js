import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchAllTrees} from '../store/tree-types'

class Learn extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getTrees()
  }

  render() {
    const trees = this.props.trees
    return (
      <div>
        <h1>Pine Trees of Massachusetts</h1>
        <div className="trees-list">
          {trees.map(tree => {
            return (
              <div className="tree" key={tree.id}>
                <img src={window.location.origin + tree.tree_image} />
                <h5>{tree.common_name}</h5>
                <h5>{tree.latin_name}</h5>
              </div>
            )
          })}
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
    trees: state.trees
  }
}

const mapDispatch = dispatch => {
  return {
    getTrees: () => dispatch(fetchAllTrees())
  }
}

export default connect(mapState, mapDispatch)(Learn)

/**
 * PROP TYPES
 */
Learn.propTypes = {
  trees: PropTypes.array
}
