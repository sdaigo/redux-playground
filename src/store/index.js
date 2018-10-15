import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import { booksReducer } from '../modules/books'
import { notificationReducer } from '../modules/notification'
import { uiReducer } from '../modules/ui'

import { booksMiddleware } from '../middlewares/feature'
import { apiMiddleware } from '../middlewares/core'

const rootReducer = combineReducers({
  books: booksReducer,
  ui: uiReducer,
  notification: notificationReducer,
})

// action router
const featureMiddleware = [booksMiddleware]

// system generic middlewares
const coreMiddleware = [apiMiddleware]

const enhancer = compose(
  applyMiddleware(...featureMiddleware, ...coreMiddleware)
)

const store = createStore(rootReducer, {}, enhancer)

export default store
