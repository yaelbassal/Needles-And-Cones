import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import treesReducer from './tree-types'
import singleTreeReducer from './single-tree'
import journalReducer from './journal'

const reducer = combineReducers({
  user,
  trees: treesReducer,
  tree: singleTreeReducer,
  journal: journalReducer
})
console.log('This is reducer', reducer)
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
