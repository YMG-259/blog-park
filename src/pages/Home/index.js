import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Tabs from '@/components/Tabs'
import Icon from '@components/Icon'
import { Popup } from 'antd-mobile'
import { useDispatch, useSelector } from 'react-redux'
import { getUserChannels, getAllChannels } from '../../store/actions/home'
import Channels from './components/Channels'

const Home = () => {
  const dispatch = useDispatch()
  const [visibleCloseRight, setVisibleCloseRight] = useState(false)
  useEffect(() => {
    dispatch(getUserChannels())
    dispatch(getAllChannels())
  }, [dispatch])

  const tabs = useSelector((state) => state.home.userChannels)

  return (
    <div className={styles.root}>
      <Tabs tabs={tabs}></Tabs>
      <div className="tabs-opration">
        <Icon type="icon-sousuo1" />
        <Icon
          type="icon-pindaoEPG"
          onClick={() => {
            setVisibleCloseRight(true)
          }}
        />
        <Popup
          position="left"
          visible={visibleCloseRight}
          showCloseButton
          onClose={() => {
            setVisibleCloseRight(false)
          }}
        >
          {<Channels></Channels>}
        </Popup>
      </div>
    </div>
  )
}

export default Home
