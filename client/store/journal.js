import axios from 'axios'

//ACTION TYPES
const GET_JOURNAL = 'GET_JOURNAL'
const UPDATE_JOURNAL = 'UPDATE_JOURNAL'

//ACTION CREATORS
const setJournal = journal => ({
  type: GET_JOURNAL,
  journal
})

const updateJournal = updatedJournal => ({
  type: UPDATE_JOURNAL,
  updatedJournal
})

//THUNK CREATORS
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

export const updateJournalEntry = entryInfo => {
  return async dispatch => {
    try {
      const {data} = await axios.put('/api/journal', entryInfo)
      //why is the dispatch not working? Look into this.
      await dispatch(updateJournal(data))
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
    case UPDATE_JOURNAL:
      return action.updatedJournal
    default:
      return state
  }
}
