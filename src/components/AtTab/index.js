import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtButton } from 'taro-ui'
import './index.scss'

export default class AtTab extends Component {
  //   static propTypes = {
  //     tabChange: PropTypes.func,
  // }
  static defaultProps = {
    tabDirection: 'horizontal', //horizontal'，'vertical'
    height: '',
    scroll: false,
    swipeable: true, //是否支持手势滑动切换内容页
    animated: true,
    tabList: []
  }
  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick(value) {
    this.props.tabChange(value)
    this.setState({
      current: value
    })
  }
  render() {
    const {
      tabList,
      tabDirection,
      height,
      swipeable,
      scroll,
      animated,
      content
    } = this.props
    const { current } = this.state
    return (
      <AtTabs
        tabDirection={tabDirection}
        height={height}
        swipeable={swipeable}
        scroll={scroll}
        animated={animated}
        current={current}
        tabList={tabList}
        onClick={this.handleClick.bind(this)}
      > 
         {tabList.map((tab, i) => {
            return (
              <AtTabsPane
                current={current}
                index={current}
                key={i}
              >
                {content}
               
              </AtTabsPane>
            )
          })}
      </AtTabs>
    )
  }
}
