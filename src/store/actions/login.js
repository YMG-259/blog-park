import request from '@utils/request'

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
  }
}
