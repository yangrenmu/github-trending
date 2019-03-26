import Taro, { Component } from "@tarojs/taro"
import { View, Image } from "@tarojs/components"
import { connect } from "@tarojs/redux"
import { add, minus, asyncAdd } from "../../actions/trending"
import { Banner } from "../banner"
import { Card } from "../card"
import bgImg from "../../image/bg.png"
import "../../common/iconfont/iconfont.css"
import "./index.scss"

@connect(
  ({ counter }) => ({
    counter
  }),
  dispatch => ({
    add() {
      dispatch(add())
    },
    dec() {
      dispatch(minus())
    },
    asyncAdd() {
      dispatch(asyncAdd())
    }
  })
)
class Index extends Component {
  config = {
    navigationBarTitleText: "Trending"
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
        <Image className='bg' src={bgImg} />
        <View className='header'>
          <Image className='iconfont icon-set' />
          <View className='title'>Trending</View>
        </View>
        <Banner />
        <Card />
      </View>
    )
  }
}

export default Index
