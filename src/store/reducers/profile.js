const initValue = {
  user: {},
  profile: {},
}
/**
 * 处理个人信息的reducer
 * @param {*} state
 * @param {*} action
 */
export default function reducer(state = initValue, action) {
  const { type, payload } = action
  if (type === 'profile/user') {
    return {
      ...state,
      user: payload,
    }
  }
  if (type === 'save/profile') {
    return {
      ...state,
      profile: payload,
    }
  }
  return state
}
