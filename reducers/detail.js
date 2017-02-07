import * as types from '../constants/ActionTypes'

const detail=(state={},action) => {
  switch (action.type) {
    case types.FETCH_DETAIL_SUCCESS:
      return Object.assign({}, state,action.detailData)
    default:
      return state
  }
}
export default detail
