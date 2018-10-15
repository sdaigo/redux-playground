import { BOOKS, FETCH_BOOKS, setBooks } from '../../modules/books'
import { API_SUCCESS, API_ERROR, apiRequest } from '../../modules/api'
import { setLoader } from '../../modules/ui'
import { setNotification } from '../../modules/notification'

const BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes?q=redux'

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
        })
      )
      next(
        setLoader({
          state: true,
          feature: BOOKS,
        })
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
