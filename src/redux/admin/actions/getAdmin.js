import { getTheAdmin } from '../../../services'

export const GETTING_ADMIN = 'addmin/GETTING_ADMIN'
export const ADMIN_SUCCESS = 'admin/ADMIN_SUCCESS'
export const ADMIN_RESULTS = 'admin/ADMIN_RESULTS'
export const ADMIN_FAILED = 'admin/ADMIN_FAILED'

let getAdmin = () => {
  return async (dispatch, getState) => {
    dispatch({type: GETTING_ADMIN})

    try {
      let response = await getTheAdmin()
      dispatch({type: ADMIN_RESULTS, payload: response})
    } catch (error) {
      dispatch({type: ADMIN_FAILED, payload: error})
    }
  }
}

export default getAdmin
