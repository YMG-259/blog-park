import React from 'react'
import styles from './index.module.scss'
import Icon from '@components/Icon'
import { useHistory, useLocation } from 'react-router'
import classNames from 'classnames'
import { Switch, Route } from 'react-router-dom'

const Home = React.lazy(() => import('@/pages/Home'))
const QA = React.lazy(() => import('@/pages/QA'))
const Video = React.lazy(() => import('@/pages/Video'))
const Profile = React.lazy(() => import('@/pages/Profile'))
const tabBar = [
  {
    title: '首页',
    icon: 'icon-shouye',
    path: '/home',
  },
  {
    title: '问答',
    icon: 'icon-wenda1',
    path: '/home/qa',
  },
  {
    title: '视频',
    icon: 'icon-shipin',
    path: '/home/video',
  },
  {
    title: '我的',
    icon: 'icon-wode',
    path: '/home/profile',
  },
]
const Layout = () => {
  const history = useHistory()
  const location = useLocation()
  // console.log(location)
  return (
    <div className={styles.root}>
      {/* 区域一：点击按钮切换显示内容的区域 */}
      <div className="tab-content">
        <Switch>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/home/QA" component={QA}></Route>
          <Route path="/home/Video" component={Video}></Route>
          <Route path="/home/Profile" component={Profile}></Route>
        </Switch>
      </div>
      {/* 区域二：按钮区域，会使用固定定位显示在页面底部 */}
      <div className="tabbar">
        {tabBar.map((item) => (
          <div
            className={classNames(
              'tabbar-item',
              location.pathname === item.path ? 'tabbar-item-active' : ''
            )}
            key={item.title}
            onClick={() => history.push(item.path)}
          >
            <Icon
              type={
                location.pathname === item.path ? `${item.icon}-sel` : item.icon
              }
            />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Layout
