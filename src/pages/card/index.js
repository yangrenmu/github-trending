import Taro, { Component } from '@tarojs/taro'
import { View, PickerView, PickerViewColumn } from '@tarojs/components'
import "../../common/iconfont/iconfont.css"
import './card.scss'
export default class Card extends Component {
  constructor() {
    super()
    this.state = {
      since: ['today', 'weekly', 'monthly'],
      language: ['javascript', 'java', 'go'],
      sinceIcon: 'iconfont icon-down',
      languageIcon: 'iconfont icon-down',
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
    const { since, language, showSinceSelect } = this.state
    const sinceList = since.map((item, index) => {
      return <View onClick={this.showSince} key={index}>{item}</View>
    })
    return (
      <View className="card">
        <View className="card-since" onClick={this.showSince}>
          <View className="card-since-wrap">
            <View className="card-since-wrap-text">{since[0]}</View>
            <Image className={sinceIcon} />
          </View>
          {showSinceSelect ? sinceList : null}
        </View>
        <View className="card-language">
          <View className="card-language-wrap">
            <View className="card-languag-wrap-text">{language[0]}</View>
            <Image className={languageIcon} />
          </View>
        </View>
      </View>
    )
  }
}
