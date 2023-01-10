import http from '@utils/request'

/**
 *  获取用户信息
 * @returns
 */
export const getUser = () => {
  return async (dispatch) => {
    const res = await http.get('/user')
    console.log(res)
  }
}
