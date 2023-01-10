import request from '@utils/request'
import { removeTokenInfo, setTokenInfo } from '../../utils/storage'

export const sendCode = (mobile) => {
  return async (dispatch) => {
    const res = await request({
      url: `/sms/codes/${mobile}`,
      method: 'get',
    })
    console.log(res)
  }
}

export const savaToken = (payload) => {
  return {
    type: 'login/token',
    payload,
  }
}
/**
 *登录
 */
export const login = (data) => {
  return async (dispatch) => {
    const res = await request({
      method: 'post',
      url: '/authorizations',
      data,
    })
    // const tokenInfo = res.data.token
    // console.log(tokenInfo)
    dispatch(savaToken(res.data))
    setTokenInfo(res.data)
  }
}

/**
 * logout
 */
export const logout = () => {
  return (dispatch) => {
    // 移除本地token
    removeTokenInfo()
    //移除redux的token
    dispatch({
      type: 'login/logout',
    })
  }
}
