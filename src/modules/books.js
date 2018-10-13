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
