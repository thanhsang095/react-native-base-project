import * as actionTypes from "./actionTypes";

const initialState = {
  currentUser: undefined,
  error: undefined,
  isLoading: false,
  logoutSuccessfully: false,
}

export default appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.APP_STORE_USER:
      return {
        ...state,
        currentUser: action.user,
        error: undefined,
      }

    case actionTypes.APP_SET_USER:
      return {
        ...state,
        currentUser: action.user
      }

    case actionTypes.APP_ERROR:
      return {
        ...state,
        error: action.error
      }

    case actionTypes.APP_LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: undefined,
        logoutSuccessfully: false,
      }
    case actionTypes.APP_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        logoutSuccessfully: true,
        currentUser: undefined,
      }
    case actionTypes.APP_LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}