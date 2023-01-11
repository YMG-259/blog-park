const initValue = {
  userChannels: [],
}

export default function reducer(state = initValue, action) {
  const { type, payload } = action
  switch (type) {
    case 'home/saveChannels':
      return {
        ...state,
        userChannels: payload,
      }
    default:
      return state
  }
}
