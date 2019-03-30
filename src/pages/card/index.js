import Taro, { Component } from "@tarojs/taro"
import { View, Image } from "@tarojs/components"
import "../../common/iconfont/iconfont.css"
import "./card.scss"

export default class Card extends Component {
  constructor() {
    super()
    this.state = {
      since: ["today", "weekly", "monthly"],
      language: ["javascript", "java", "go", "python", "c++", "pho"],
      sinceIcon: "iconfont icon-down",
      languageIcon: "iconfont icon-down",
      showSinceSelect: false,
      showLanguageSelect: false,
      sinceItemName: "today",
      languageItemName: "javascript"
    }
  }
  showSince = () => {
    const { showSinceSelect } = this.state
    this.setState({
      showSinceSelect: !showSinceSelect
    })
  }
  onSinceSelect = e => {
    e.preventDefault()
    this.setState({
      sinceItemName: e.currentTarget.dataset.name
    })
  }
  showLanguage = () => {
    const { showLanguageSelect } = this.state
    this.setState({
      showLanguageSelect: !showLanguageSelect
    })
  }
  onLanguageSelect = e => {
    e.preventDefault()
    this.setState({
      languageItemName: e.currentTarget.dataset.name
    })
  }
  render() {
    const {
      since,
      language,
      showSinceSelect,
      showLanguageSelect,
      sinceIcon,
      languageIcon,
      sinceItemName,
      languageItemName
    } = this.state
    const sinceList = since.map((item, index) => {
      return (
        <View
          className='select-text'
          onClick={e => this.onSinceSelect(e)}
          key={index}
          data-name={item}
        >
          {item}
        </View>
      )
    })
    const languageList = language.map((item, index) => {
      return (
        <View
          className='select-text'
          onClick={e => this.onLanguageSelect(e)}
          key={index}
          data-name={item}
        >
          {item}
        </View>
      )
    })
    return (
      <View className='card'>
        <View className='card-since' onClick={this.showSince}>
          <View className='card-since-wrap'>
            <View className='card-since-wrap-text'>{`Trending：${sinceItemName}`}</View>
            <Image className={sinceIcon} />
          </View>
          {showSinceSelect ? (
            <View className='select-item'>{sinceList}</View>
          ) : null}
        </View>
        <View onClick={this.showLanguage} className='card-language'>
          <View className='card-language-wrap'>
            <View className='card-language-wrap-text'>
              {`language：${languageItemName}`}
            </View>
            <Image className={languageIcon} />
          </View>
          {showLanguageSelect ? (
            <View className='select-item'>{languageList}</View>
          ) : null}
        </View>
        <View className='card-content' />
      </View>
    )
  }
}
