/*
The history library lets you easily manage session history anywhere JavaScript runs. A history object abstracts away the differences in various environments and provides a minimal API that lets you manage the history stack, navigate, and persist *state between sessions. The library provides 3 different methods for working with history, depending on your environments: browser history, hash history, and memory history(for non-browser environments, i.e. tests).
Helpful Resource: https://github.com/ReactTraining/history/blob/28c89f4091ae9e1b0001341ea60c629674e83627/docs/getting-started.md
*/

import {createMemoryHistory, createBrowserHistory} from 'history'

const history =
  process.env.NODE_ENV === 'test'
    ? createMemoryHistory()
    : createBrowserHistory()

export default history
