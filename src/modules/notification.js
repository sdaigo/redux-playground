// action types
export const SET_NOTIFICATION = 'SET_NOTIFICATION'

// action creators
export function setNotification({ message, feature }) {
  return {
    type: `${feature} ${SET_NOTIFICATION}`,
    payload: message,
    meta: { feature },
  }
}

// ====================
// reducers
// ====================
const initialState = []

export function notificationReducer(notifications = initialState, action) {
  switch (true) {
    case action.type.includes(SET_NOTIFICATION):
      return [...notifications, action.payload]
    default:
      return notifications
  }
}
