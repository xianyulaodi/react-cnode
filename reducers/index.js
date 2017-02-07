import { combineReducers } from 'redux'

import topics from './topics'
import detail from './detail'

// 将所有的reducer结合为一个,传给store
const rootReducer = combineReducers({
  topics,
  detail
})

export default rootReducer
