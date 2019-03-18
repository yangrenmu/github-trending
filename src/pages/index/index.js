import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import {Banner} from '../banner'
import { add, minus, asyncAdd } from '../../actions/counter'
import bgImg from '../../image/bg.png'
import '../../common/iconfont/iconfont.css'
import './index.scss'



@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

  config = {
    navigationBarTitleText: 'Trending'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='main'>
        <image class='bg' src={bgImg}></image>
        <View className="header">
          <i class=" iconfont icon-set"></i>
          <View className="title">Trending</View>
        </View>
        <View className="banner">
          <Banner />
        </View>
      </View >
    )
  }
}

const Banner = <Swiper
className='test-h'
indicatorColor='#999'
indicatorActiveColor='#fff'
circular
indicatorDots
autoplay>
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

export default Index
