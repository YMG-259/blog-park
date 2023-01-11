import Icon from '@/components/Icon'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.scss'

/**
 * 频道管理组件
 * @param {Number} props.tabActiveIndex 用户选中的频道的索引
 * @param {Function} props.onClose 关闭频道管理抽屉时的回调函数
 * @param {Function} props.onChannelClick 当点击频道列表中的某个频道时的会带哦函数
 */
const Channels = ({ tabActiveIndex, onClose, onChannelClick }) => {
  const userChannels = useSelector((state) => state.home.userChannels)
  const recommendChannels = useSelector((state) => {
    const { userChannels, allChannels } = state.home
    return allChannels.filter((item) => {
      if (userChannels.findIndex((v) => v.id === item.id) === -1) {
        return true
      } else {
        return false
      }
    })
  })
  console.log(recommendChannels)

  return (
    <div className={styles.root}>
      {/* 顶部栏：带关闭按钮 */}
      <div className="channel-header">
        <Icon type="icon-close" onClick={onClose} />
      </div>

      {/* 频道列表 */}
      <div className="channel-content">
        {/* 当前已选择的频道列表 */}
        <div className="channel-item edit">
          <div className="channel-item-header">
            <span className="channel-item-title">我的频道</span>
            <span className="channel-item-title-extra">点击删除频道</span>
            <span className="channel-item-edit">保存</span>
          </div>

          <div className="channel-list">
            {recommendChannels.map((item) => (
              <span className="channel-list-item" key={item.id}>
                {item.name}
                {/* <Icon type="icon-close" /> */}
              </span>
            ))}
          </div>
        </div>

        {/* 推荐的频道列表 */}
        <div className="channel-item">
          <div className="channel-item-header">
            <span className="channel-item-title">频道推荐</span>
            <span className="channel-item-title-extra">点击添加频道</span>
          </div>
          <div className="channel-list">
            {recommendChannels.map((item) => (
              <span className="channel-list-item" key={item.id}>
                + {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Channels
