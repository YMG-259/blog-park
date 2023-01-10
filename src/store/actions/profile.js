import http from '@/utils/request.js'

/**
 * 保存用户信息
 * @param {*} payload
 * @returns
 */
export const saveUser = (payload) => {
  return {
    type: 'profile/user',
    payload,
  }
}
/**
 *  获取用户信息
 * @returns
 */
export const getUser = () => {
  return async (dispatch) => {
    const res = await http.get('/user')
    console.log(res)
    dispatch(saveUser(res.data))
  }
}

export const saveProfile = (payload) => {
  return {
    type: 'save/profile',
    payload,
  }
}

/**
 * 获取用户个人信息
 * @returns
 */
export const getProfile = () => {
  return async (dispatch) => {
    const res = await http.get('/user/profile')
    console.log(res)
    dispatch(saveProfile(res.data))
  }
}
