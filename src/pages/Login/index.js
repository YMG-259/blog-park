import React, { useState } from 'react'
import NavBar from '@/components/NavBar'
import styles from './index.module.scss'
import Input from '@/components/Input'
import classNames from 'classnames'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { sendCode, login } from '../../store/actions/login'
import { Toast } from 'antd-mobile'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [time, setTime] = useState(0)
  const onExtraClick = async () => {
    if (time > 0) return
    if (!/^1[3-9]\d{9}$/.test(mobile)) {
      formik.setTouched({
        mobile: true,
      })
      return
    }

    await dispatch(sendCode(mobile))
    // console.log('success')
    Toast.show({
      icon: 'success',
      content: '验证码获取成功',
    })
    setTime(60)
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 1) {
          clearInterval(timer)
        }
        return time - 1
      })
    }, 1000)
  }
  const formik = useFormik({
    initialValues: {
      mobile: '15546842111',
      code: '246810',
    },
    async onSubmit(values) {
      await dispatch(login(values))
      Toast.show({
        icon: 'success',
        content: '登录成功',
      })
      history.push('/home')
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .required('手机号不能为空')
        .matches(/^1[3-9]\d{9}$/, '手机号格式错误'),
      code: Yup.string()
        .required('验证码不能为空')
        .matches(/^\d{6}$/, '验证码格式错误'),
    }),
  })

  const {
    values: { mobile, code },
    handleChange,
    handleSubmit,
    handleBulr,
    touched,
    errors,
    isValid,
  } = formik
  // console.log(formik)
  return (
    <div className={styles.root}>
      {/* 标题 */}
      <NavBar extra="右侧">登录</NavBar>
      {/* 内容 */}
      <div className="content">
        <h3>短信登陆</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-item">
            <Input
              placeholder="请输入手机号"
              value={mobile}
              onChange={handleChange}
              name="mobile"
              onBulr={handleBulr}
            ></Input>
            {touched.mobile && errors.mobile ? (
              <div className="validate">{errors.mobile}</div>
            ) : null}
          </div>

          <div className="input-item">
            <Input
              placeholder="请输入验证码"
              extra={time === 0 ? '获取验证码' : `${time}s后获取`}
              onExtraClick={onExtraClick}
              value={code}
              onChange={handleChange}
              name="code"
              onBulr={handleBulr}
            ></Input>
            {touched.code && errors.code ? (
              <div className="validate">{errors.mobile}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className={classNames('login-btn', { disabled: !isValid })}
            disabled={!isValid}
          >
            登录
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
