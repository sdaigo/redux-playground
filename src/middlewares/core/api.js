import { API_REQUEST, apiError, apiSuccess } from '../../modules/api'

/**
 * core API middleware
 * 1. generic and reusable
 * 2. has only one responsibility
 * 3. configured by command action meta data
 * 4. completely decoupled from the rest of our application
 */

export const apiMiddleware = ({ dispatch }) => next => async action => {
  next(action)
  if (action.type.includes(API_REQUEST)) {
    const { url, method, feature } = action.meta

    try {
      const response = await fetch(url, { method })
      const data = await response.json()
      dispatch(apiSuccess({ data, feature }))
    } catch (error) {
      dispatch(apiError({ error, feature }))
    }
  }
}
