import { apiRequest, API_SUCCESS, API_ERROR } from './api'
import { setLoader } from './ui'
import { setNotification } from './notification'

const BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes?q=redux'

// ====================
// actions
// ====================

// feature names
export const BOOKS = '[Books]'

// action types
export const FETCH_BOOKS = `${BOOKS} FETCH`
export const SET_BOOKS = `${BOOKS} SET`

// action creators
export function setBooks({ books }) {
  return {
    type: SET_BOOKS,
    payload: books,
  }
}

export function fetchBooks({ query }) {
  return {
    type: FETCH_BOOKS,
    payload: query,
  }
}

// ====================
// middlewares
// ====================
// Routing actions related to books feature
export const booksMiddleware = () => next => action => {
  next(action)

  switch (action.type) {
    case FETCH_BOOKS:
      next(
        apiRequest({
          body: null,
          method: 'GET',
          url: BOOKS_URL,
          feature: BOOKS,
        }),
      )
      next(
        setLoader({
          state: true,
          feature: BOOKS,
        }),
      )
      break

    case `${BOOKS} ${API_SUCCESS}`:
      next(setBooks({ books: action.payload.items }))
      next(setLoader({ state: false, feature: BOOKS }))
      break

    case `${BOOKS} ${API_ERROR}`:
      next(setNotification({ message: action.payload.message, feature: BOOKS }))
      next(setLoader({ state: false, feature: BOOKS }))
      break

    default:
    // pass
  }
}

// ====================
// reducers
// ====================
const initialState = []

export function booksReducer(books = initialState, action) {
  switch (action.type) {
    case SET_BOOKS:
      return action.payload
    default:
      return books
  }
}
