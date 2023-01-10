import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import NavBar from '@/components/NavBar'
import classNames from 'classnames'
import { List, Image, Popup, Modal, Toast } from 'antd-mobile'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '@/store/actions/profile'
import { logout } from '@/store/actions/login'
import { useHistory } from 'react-router-dom'
const ProfileEdit = () => {
  const { Item } = List
  const dispatch = useDispatch()
  const [visibleCloseRight, setVisibleCloseRight] = useState(false)
  const mockContentWithCloseIcon = (
    <div style={{ padding: '40px 20px 20px' }}></div>
  )
  const history = useHistory()
  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])
  const profile = useSelector((state) => state.profile.profile)
  return (
    <div className={styles.root}>
      {/* 顶部导航栏 */}
      <NavBar>个人信息</NavBar>
      <div className="wrapper">
        <List className="profile-list">
          <Item
            onClick={() => {}}
            extra={
              <Image>
                src={profile.photo}
                style={{ borderRadius: 20 }}
                fit='cover' width={22.5}
                height={22.5}
              </Image>
            }
          >
            头像
          </Item>
          <Item
            onClick={() => {
              setVisibleCloseRight(true)
            }}
            extra={profile.name}
          >
            昵称
          </Item>
          <Popup
            position="right"
            visible={visibleCloseRight}
            showCloseButton
            onClose={() => {
              setVisibleCloseRight(false)
            }}
          >
            {mockContentWithCloseIcon}
          </Popup>
          <Item
            onClick={() => {}}
            extra={
              <span
                className={classNames('intro', profile.intro ? 'normal' : '')}
              >
                {profile.intro || '未填写'}
              </span>
            }
          >
            简介
          </Item>
        </List>
        <List className="profile-list">
          <Item extra={profile.gender === 0 ? '男' : '女'} onClick={() => {}}>
            性别
          </Item>
        </List>
        {/* 底部栏：退出登录按钮 */}
        <div className="logout">
          <button
            className="btn"
            block
            onClick={() =>
              Modal.confirm({
                content: '确定要退出吗',
                onConfirm: async () => {
                  dispatch(logout())
                  history.push('/login')
                  //   await sleep(3000)
                  Toast.show({
                    icon: 'success',
                    content: '退出成功',
                    position: 'bottom',
                  })
                },
              })
            }
          >
            退出登录
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileEdit
