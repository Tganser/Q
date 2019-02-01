import {
  GETTING_ADMIN,
  ADMIN_SUCCESS,
  ADMIN_RESULTS,
  ADMIN_FAILED,
} from './actions/getAdmin'

const initialState = {

}

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GETTING_ADMIN: {
      return{
        ...state,
        isSearchingAdmin: true,
      }
    }
    case ADMIN_SUCCESS: {
      return{
        ...state,
        isSearchingAdmin: false,
        searchComplete: true,
      }
    }
    case ADMIN_RESULTS: {
      return{
        ...state,
        admin: payload,
        isSearchingAdmin: false,
        searchComplete: true,
      }
    }
    case ADMIN_FAILED: {
      return{
        ...state,
        isSearchingAdmin: false,
        searchComplete: false,

      }
    }
    default:
      return state
  }
}

export default reducer
