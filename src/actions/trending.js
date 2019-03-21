import Taro from "@tarojs/taro"
import { BANNER, API_TRENDING } from "../constants/trending"

export const dispatchBanner = (language, since) => {
  return dispatch => {
    return Taro.request({
      url: `${API_TRENDING}language=${language}&since=${since}`
    }).then(res => {
      const data = res.data
      dispatch({
        type: BANNER,
        data: data
      })
    })
  }
}

export const ha = "s"
