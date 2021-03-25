import axios from 'axios'

//ACTION TYPES
const GET_TREES = 'GET_TREES'

//ACTION CREATORS
const setTrees = trees => ({
  type: GET_TREES,
  trees
})

//THUNK CREATOR
export const fetchAllTrees = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/trees')
      dispatch(setTrees(data))
    } catch (err) {
      console.log(err)
    }
  }
}

//INITIAL STATE
const initialState = []

//REDUCER
export default function treesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TREES:
      return action.trees
    default:
      return state
  }
}
