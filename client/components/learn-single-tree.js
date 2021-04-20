import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchTree} from '../store/single-tree'
import Buttons from './buttons'

class LearnSingleTree extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const treeId = this.props.match.params.treeId
    this.props.getTree(treeId)
  }

  render() {
    const tree = this.props.tree
    const sources = tree.sources

    return (
      <div className="learn-single-tree-container">
        <br />
        <h1>{tree.common_name}</h1>
        <h2>{tree.latin_name}</h2>
        <div className="single-tree-description">
          <h4>{tree.general_description}</h4>
        </div>
        <br />
        <img
          className="single-tree-image"
          src={window.location.origin + tree.tree_image}
        />
        <Buttons props={this.props.tree} />
        <div className="sources-list">
          {sources ? (
            sources.map(source => {
              return <li key={source}>{source}</li>
            })
          ) : (
            <p>Sources Are Not Currently Available</p>
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
    tree: state.tree
  }
}

const mapDispatch = dispatch => {
  return {
    getTree: treeId => dispatch(fetchTree(treeId))
  }
}

export default connect(mapState, mapDispatch)(LearnSingleTree)

/**
 * PROP TYPES
 */
LearnSingleTree.propTypes = {
  tree: PropTypes.object
}
