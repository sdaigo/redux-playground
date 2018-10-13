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
