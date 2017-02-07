/**
 * Created by xianyulaodi on 2017/01/24.
 */
import * as types from '../constants/ActionTypes'

//那些返回的状态都是由这里返回的，也就是对象里面的内容：比如hotPlayingFilms等，调用的组件记得要返回这些状态
const topics=(state={},action) => {
  switch (action.type) {
    case types.FETCH_TOPICS_SUCCESS:
      return Object.assign({}, state, {topicsData:action.topics})
    default:
      return state
  }
}
export default topics
