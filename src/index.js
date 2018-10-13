import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'

import App from './containers/app'

// 1. fetch a list of books from a remote server
// 2. show loader until get a response
// 3. if success, hide the loader and put the books collection in the state
// 4. if error occured, hide the loader and put a notification message in the state

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
)
