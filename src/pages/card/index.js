import Taro, { Component } from "@tarojs/taro"
import { View, Image } from "@tarojs/components"
import "../../common/iconfont/iconfont.css"
import "./card.scss"

export default class Card extends Component {
  constructor() {
    super()
    this.state = {
      since: ["today", "weekly", "monthly"],
      language: ["javascript", "java", "go"],
      sinceIcon: "iconfont icon-down",
      languageIcon: "iconfont icon-down",
      showSinceSelect: false
    }
  }
  showSince = () => {
    const { showSinceSelect } = this.state
    this.setState({
      showSinceSelect: !showSinceSelect
    })
  }
  render() {
    const {
      since,
      language,
      showSinceSelect,
      sinceIcon,
      languageIcon
    } = this.state
    const sinceList = since.map((item, index) => {
      return (
        <View className='select' onClick={this.showSince} key={index}>
          {item}
        </View>
      )
    })
    return (
      <View className='card'>
        <View className='card-since' onClick={this.showSince}>
          <View className='card-since-wrap'>
            <View className='card-since-wrap-text'>{`Trending：${
              since[0]
            }`}</View>
            <Image className={sinceIcon} />
          </View>
          <View className='select-text'>
            {showSinceSelect ? sinceList : null}
          </View>
        </View>
        <View className='card-language'>
          <View className='card-language-wrap'>
            <View className='card-language-wrap-text'>
              {`language：${language[0]}`}
            </View>
            <Image className={languageIcon} />
          </View>
        </View>
      </View>
    )
  }
}
