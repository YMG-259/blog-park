const initValue = {
  userChannels: [],
  allChannels: [],
}

export default function reducer(state = initValue, action) {
  const { type, payload } = action
  switch (type) {
    case 'home/saveChannels':
      return {
        ...state,
        userChannels: payload,
      }
    case 'home/saveAllChannels':
      return {
        ...state,
        allChannels: payload,
      }
    default:
      return state
  }
}
