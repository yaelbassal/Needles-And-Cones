import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchTree} from '../store/single-tree'

class LearnSingleTree extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const treeId = this.props.match.params.treeId
    this.props.getTree(treeId)
  }

  render() {
    return <div>hi</div>
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
