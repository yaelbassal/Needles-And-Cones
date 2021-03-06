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

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
//You re-export all exports of the imported module using the * syntax
export * from './user'
