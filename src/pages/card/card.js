import Taro, { Component } from "@tarojs/taro"
import { View, Image } from "@tarojs/components"
import { connect } from "@tarojs/redux"
import * as actions from "../../actions/trending"
import getTrending from "../../server/trending"
import "../../common/iconfont/iconfont.css"
import "./card.scss"

@connect(
  state => state,
  ...actions
)
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
      languageItemName: "javascript",
      cardData: {},
      pageIndex: 0
    }
  }
  componentDidMount() {
    const params = {
      since: "today",
      language: "javascript"
    }
    getTrending(params).then(res => {
      this.setState({
        cardData: res.data
      })
    })
  }
  showSince = () => {
    const { showSinceSelect } = this.state
    this.setState({
      showSinceSelect: !showSinceSelect
    })
  }
  onSinceSelect = e => {
    e.preventDefault()
    this.setState(
      {
        sinceItemName: e.currentTarget.dataset.name
      },
      () => {
        const params = {
          since: this.state.sinceItemName,
          language: this.state.languageItemName
        }
        Taro.showLoading({ title: "加载中" })
        getTrending(params).then(res => {
          this.setState({
            cardData: res.data
          })
          Taro.hideLoading()
        })
      }
    )
  }
  showLanguage = () => {
    const { showLanguageSelect } = this.state
    this.setState({
      showLanguageSelect: !showLanguageSelect
    })
  }
  onLanguageSelect = e => {
    e.preventDefault()
    this.setState(
      {
        languageItemName: e.currentTarget.dataset.name
      },
      () => {
        const params = {
          since: this.state.sinceItemName,
          language: this.state.languageItemName
        }
        Taro.showLoading({ title: "加载中" })
        getTrending(params).then(res => {
          this.setState({
            cardData: res.data
          })
          Taro.hideLoading()
        })
      }
    )
  }
  nextPage = e => {
    e.preventDefault()
    const { pageIndex } = this.state
    this.setState({
      pageIndex: pageIndex + 1
    })
  }
  prePage = e => {
    e.preventDefault()
    const { pageIndex } = this.state
    this.setState({
      pageIndex: pageIndex - 1
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
      languageItemName,
      cardData,
      pageIndex
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
    const len = cardData.length
    let currentCardList = []
    if (len > pageIndex * 3) {
      currentCardList = cardData.slice(0 + pageIndex, 3 + pageIndex)
    }
    const cardList = currentCardList.map((item, index) => {
      return (
        <View key={index} className='card-warp'>
          <View className='card-content'>
            <View className='card-content-name'>{item.name}</View>
            <View className='card-content-descript'>{item.description}</View>
            <View className='card-content-feature'>
              <View className='card-content-author'>
                {`${item.author}/stars: ${item.stars}/forks: ${item.forks}`}
              </View>
            </View>
          </View>
          <View className='card-star'>
            <View className='card-star-icon'>
              <View className='iconfont icon-star' />
              <View>{item.currentPeriodStars}</View>
            </View>
            <View className='since-name'>{sinceItemName}</View>
          </View>
        </View>
      )
    })
    return (
      <View className='card'>
        <View className='card-select'>
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
        </View>

        {cardList}
        <View className='pagination'>
          {pageIndex > 0 ? <View onClick={this.prePage}>上一页</View> : null}
          <View className='next-page' onClick={this.nextPage}>
            下一页
          </View>
        </View>
      </View>
    )
  }
}
