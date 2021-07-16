import React from 'react'
import {connect} from 'react-redux'
import Tree from 'react-d3-tree'
import {pineIdChart} from '../config'

/**
 * COMPONENT
 */
export const Find = () => {
  return (
    <div>
      <h2>Identify Your Pine</h2>
      <div id="treeWrapper">
        {/* https://www.npmjs.com/package/react-d3-tree#customizing-the-tree
      note: use https://github.com/bkrem/react-d3-tree */}
        <Tree
          data={pineIdChart}
          orientation="vertical"
          pathFunc="step"
          translate={{x: 800, y: 100}}
          scaleExtent={{min: 0.1, max: 1}}
        />
      </div>
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

export default connect(mapState)(Find)
