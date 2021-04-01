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
      //axios is communicating w/ API, which is fetching data from db, and returning it as the variable data. In this scenario, data is an obj w/ individual tree data based on the treeId. See API route.
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
