import React from 'react'
//the react-dom package provides DOM-specific methods that can be used at the top level of you app.
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
//Router allows us to add routes to the app
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'

// establishes socket connection
import './socket'

//You must pass React components and the "root" DOM node into ReactDOM.render() to render a React component or a React element.
//render() method renders a React element into the DOM in the supplied container.
ReactDOM.render(
  //The <Provider> component makes the Redux store available to any nested components that need to access the Redux store
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
