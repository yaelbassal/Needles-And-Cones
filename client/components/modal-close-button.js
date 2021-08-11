import React from 'react'

/**
 * COMPONENT
 */

export const ModalCloseButton = ({onClickFunc}) => {
  return (
    <button id="close-button" type="button" onClick={onClickFunc}>
      Close
    </button>
  )
}
