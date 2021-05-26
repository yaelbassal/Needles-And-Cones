import axios from 'axios'

//ACTION TYPES
const GET_JOURNAL = 'GET_JOURNAL'

//ACTION CREATORS
const setJournal = journal => ({
  type: GET_JOURNAL,
  journal
})

//THUNK CREATOR
export const fetchJournal = () => {
  return async dispatch => {
    try {
      //fetch data using api
      const {data} = await axios.get('/api/journal')
      //dispatch the action creator to the reducer
      dispatch(setJournal(data))
    } catch (err) {
      console.log(err)
    }
  }
}

//INITIAL STATE
const initialState = {}

//REDUCER
export default function journalReducer(state = initialState, action) {
  switch (action.type) {
    case GET_JOURNAL:
      return action.journal
    default:
      return state
  }
}
