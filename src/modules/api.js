// ====================
// actions
// ====================

// action types
export const API_REQUEST = 'API_REQUEST'
export const API_SUCCESS = 'API_SUCCESS'
export const API_ERROR = 'API_ERROR'

// action creators
export function apiRequest({ body, method, url, feature }) {
  return {
    type: `${feature} ${API_REQUEST}`,
    payload: body,
    meta: {
      method,
      url,
      feature,
    },
  }
}

export function apiSuccess({ response, feature }) {
  return {
    type: `${feature} ${API_SUCCESS}`,
    payload: response,
    meta: { feature },
  }
}

export function apiError({ error, feature }) {
  return {
    type: `${feature} ${API_ERROR}`,
    payload: error,
    meta: { feature },
  }
}

// ====================
// middlewares
// ====================
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
