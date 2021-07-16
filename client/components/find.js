import React from 'react'
import {connect} from 'react-redux'
import Tree from 'react-d3-tree'
import {pineIdChart} from '../config'

// Here we're using `renderCustomNodeElement` to represent each node
// as an SVG `rect` instead of the default `circle`.The <rect> element is a basic SVG shape that draws rectangles, defined by their position, width, and height. The rectangles may have their corners rounded.
const renderRectSvgNode = ({nodeDatum, toggleNode, foreignObjectProps}) => (
  <g>
    <rect width="30" height="30" x="-10" onClick={toggleNode} fill="white" />
    <foreignObject {...foreignObjectProps}>
      <div style={{border: '1px solid black', backgroundColor: '#dedede'}}>
        <h3 style={{textAlign: 'center'}}>{nodeDatum.name}</h3>
        {nodeDatum.attributes ? <h3>{nodeDatum.attributes.result}</h3> : <h3 />}
      </div>
    </foreignObject>
  </g>
)

/**
 * COMPONENT
 */
export const Find = () => {
  const nodeSize = {x: 200, y: 200}
  const foreignObjectProps = {width: nodeSize.x, height: nodeSize.y, x: 20}
  return (
    <div>
      <h2>Identify Your Pine</h2>
      <div id="treeWrapper">
        {/* https://www.npmjs.com/package/react-d3-tree#customizing-the-tree
      note: use https://github.com/bkrem/react-d3-tree */}
        <Tree
          data={pineIdChart}
          orientation="vertical"
          pathFunc="diagonal"
          separation={{nonSiblings: 3, siblings: 2}}
          translate={{x: 800, y: 100}}
          scaleExtent={{min: 0.7, max: 0.7}}
          renderCustomNodeElement={rd3tProps =>
            renderRectSvgNode({...rd3tProps, foreignObjectProps})
          }
          depthFactor="200"
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
