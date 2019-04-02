import Taro from "@tarojs/taro"
import { API_TRENDING } from "../constants/trending"

const getTrending = params => {
  const url = `${API_TRENDING}language=${params.language}&since=${params.since}`
  console.log("url", url)
  return Taro.request({ url }).then(res => res)
}
export default getTrending
