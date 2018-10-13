// action types
export const SET_LOADER = 'SET_LOADER'

// action creators
export function setLoader({ state, feature }) {
  return {
    type: `${feature} ${SET_LOADER}`,
    payload: state,
    meta: { feature },
  }
}

// ====================
// reducers
// ====================
const initialState = {
  loading: false,
}

export function uiReducer(ui = initialState, action) {
  switch (true) {
    case action.type.includes(SET_LOADER):
      return {
        ...ui,
        loading: action.payload,
      }
    default:
      return ui
  }
}
