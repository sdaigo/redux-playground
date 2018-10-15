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
