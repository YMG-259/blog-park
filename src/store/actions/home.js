import http from '@/utils/request'
/**
 * 获取用户频道
 * @returns
 */
export const getUserChannels = () => {
  return async (dispatch) => {
    const res = await http.get('/user/channels')
    // console.log(res)
    dispatch(saveUserChannels(res.data.channels))
  }
}
/**
 * 用户频道保存到redux
 * @returns
 */
export const saveUserChannels = (payload) => {
  return {
    type: 'home/saveChannels',
    payload,
  }
}
// 获取所有频道
export const getAllChannels = () => {
  return async (dispatch) => {
    const res = await http.get('/channels')
    console.log(res)
    dispatch(saveAllChannels(res.data.channels))
  }
}

// 保存所有频道到redux
export const saveAllChannels = (payload) => {
  return {
    type: 'home/saveAllChannels',
    payload,
  }
}
