import Taro, { Component } from "@tarojs/taro"
import { View, Swiper, SwiperItem, Image } from "@tarojs/components"
import { connect } from "@tarojs/redux"
import * as actions from "../../actions/trending"
import "./banner.scss"
import girlImg from "../../image/girl.jpg"

@connect(
  state => state.trending,
  { ...actions }
)
class Banner extends Component {
  constructor() {
    super()
    this.state = {
      handpick: []
    }
  }
  componentDidMount() {
    this.props.dispatchBanner("all", "daily").then(() => {
      const banner = this.props.banner
      this.setState({
        handpick: banner.slice(0, 3)
      })
    })
  }
  render() {
    const { handpick } = this.state
    const bannerList =
      handpick &&
      handpick.map((item, index) => {
        return (
          <SwiperItem key={index} className='banner-item'>
            <Image className='banner-item-image' src={girlImg} />
            <View className='banner-item-mask' />
            <View className='banner-item-description'>{item.description}</View>
            <View className='banner-item-info'>
              {item.author}/{item.stars}
            </View>
          </SwiperItem>
        )
      })
    return (
      <View>
        <Swiper
          className='banner'
          indicatorColor='#999'
          indicatorActiveColor='#fff'
          circular
          indicatorDots
          autoplay
        >
          {bannerList}
        </Swiper>
      </View>
    )
  }
}
export default Banner
