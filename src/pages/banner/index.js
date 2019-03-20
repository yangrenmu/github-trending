import Taro, { Component } from "@tarojs/taro"
import { View, Swiper, SwiperItem } from "@tarojs/components"
import { connect } from "@tarojs/redux"
import * as actions from "../../actions/trending"

@connect(
  state => state.trending,
  { ...actions }
)
class Banner extends Component {
  render() {
    // console.log(this.props.getBanner())
    this.props.dispatchBanner("javascript", "daily")
    console.log(this.props.banner)
    return (
      <View>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#fff'
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className='demo-text-1'>1</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>3</View>
          </SwiperItem>
        </Swiper>
      </View>
    )
  }
}
export default Banner
