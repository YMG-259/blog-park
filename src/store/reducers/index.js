import login from '../reducers/login'
import profile from '../reducers/profile'
const { combineReducers } = require('redux')

const reducer = combineReducers({
  login,
  profile,
})
export default reducer
