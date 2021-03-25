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
      <div className="learn-container">
        <br />
        <h1>Pine Trees of Massachusetts</h1>
        <br />
        <div className="trees-list">
          {trees.map(tree => {
            return (
              <div className="tree" key={tree.id}>
                {/* Next Step: Add Link Tag to make image clickable.  */}
                <img
                  className="tree-image"
                  src={window.location.origin + tree.tree_image}
                />
                <h4>
                  {tree.common_name} | {tree.latin_name}
                </h4>
                <br />
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
