import Taro from "@tarojs/taro"
import { BANNER, API_TRENDING } from "../constants/trending"

export const dispatchBanner = (language, since) => {
  Taro.request({
    url: `${API_TRENDING}language=${language}&since=${since}`
  }).then(res => {
    console.log(res)
  })
  return dispatch => {
    dispatch({
      type: BANNER,
      data: "hahaha"
    })
  }
}

export const ha = "s"
