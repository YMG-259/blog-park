import React from 'react'
import Icon from '@/components/Icon'
import styles from './index.module.scss'
import { useHistory, withRouter } from 'react-router-dom'
//路由提供的几个与路由有关的hook
// useHistory useLocation useParams
const NavBar = ({ children, extra }) => {
  const history = useHistory()
  const back = () => {
    //返回上一页
    history.go(-1)
  }
  return (
    <div className={styles.root}>
      <div className="left">
        <Icon type="icon-fanhui" onClick={back}></Icon>
      </div>
      <div className="title">{children}</div>
      <div className="right">{extra}</div>
    </div>
  )
}

export default NavBar
