import login from '../reducers/login'
import profile from '../reducers/profile'
import home from '../reducers/home'
const { combineReducers } = require('redux')

const reducer = combineReducers({
  login,
  profile,
  home,
})
export default reducer
