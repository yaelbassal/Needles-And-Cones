import React from 'react'
import {connect} from 'react-redux'
import Tree from 'react-d3-tree'
import {pineIdChart} from '../config'

// Here we're using `renderCustomNodeElement` to represent each node
// as an SVG `rect` instead of the default `circle`.The <rect> element is a basic SVG shape that draws rectangles, defined by their position, width, and height. The rectangles may have their corners rounded.

const renderRectSvgNode = ({nodeDatum, toggleNode, foreignObjectProps}) => (
  <g>
    <rect
      width="30"
      height="30"
      x="-20"
      onClick={toggleNode}
      fill="chocolate"
    />
    {/* leverage the foreignObject tag to render HTML inside the SVG namespace  */}
    <foreignObject {...foreignObjectProps}>
      <div className="foreign-object">
        <h3>{nodeDatum.name}</h3>
        {nodeDatum.attributes ? <h3>{nodeDatum.attributes.result}</h3> : <br />}
      </div>
    </foreignObject>
  </g>
)

/**
 * COMPONENT
 */
export const Find = () => {
  //nodeSize variable stores values for width and height for the foreignObject
  const nodeSize = {x: 200, y: 200}
  const foreignObjectProps = {width: nodeSize.x, height: nodeSize.y, x: 20}
  return (
    <div className="find-container">
      <h1>Identify Your Pine</h1>
      <div id="treeWrapper">
        {/* https://www.npmjs.com/package/react-d3-tree#customizing-the-tree
      note: use https://github.com/bkrem/react-d3-tree */}
        <Tree
          data={pineIdChart}
          orientation="vertical"
          separation={{nonSiblings: 3, siblings: 2}}
          translate={{x: 750, y: 50}}
          scaleExtent={{min: 0.7, max: 0.7}}
          //The renderCustomNodeElement prop accepts a custom render function that will be used for every node in the tree
          renderCustomNodeElement=//rd3tNodeProps are props from the custom node line #9 and 10. rd3tNodeProps are the properties that are passed to the user-defined renderCustomNodeElement render function. Double check this understandiing.
          {rd3tNodeProps =>
            renderRectSvgNode({...rd3tNodeProps, foreignObjectProps})
          }
          //Determines the spacing between parent & child nodes.
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
