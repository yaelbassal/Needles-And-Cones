import axios from 'axios'

//ACTION TYPES
const GET_TREE = 'GET_TREE'

//ACTION CREATORS
const setTree = tree => ({
  type: GET_TREE,
  tree
})

//THUNK CREATOR
export const fetchTree = treeId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/trees/${treeId}`)
      dispatch(setTree(data))
    } catch (err) {
      console.log(err)
    }
  }
}

//INITIAL STATE
const initialState = {}

//REDUCER
export default function singleTreeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TREE:
      return action.tree
    default:
      return state
  }
}
