import { BANNER } from '../constants/trending'

const INITIAL_STATE = {
  banner: ''
}

export default function trending(state = INITIAL_STATE, action) {
  switch (action.type) {
    case BANNER:
      return {
        ...state,
        banner: action.data
      }
    default:
      return state
  }
}
