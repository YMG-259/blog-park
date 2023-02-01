import React from 'react'
import NavBar from '@/components/NavBar'
import styles from './index.module.scss'
import Input from '@/components/Input'
import * as Yup from 'yup'
import { useFormik } from 'formik'
const Login = () => {
  const onExtraClick = () => {
    console.log(5555)
  }
  const formik = useFormik({
    initialValues: {
      mobile: '',
      code: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
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
  } = formik
  console.log(formik)
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
          </div>

          <div className="input-item">
            <Input
              placeholder="请输入验证码"
              extra="获取验证码"
              onExtraClick={onExtraClick}
              value={code}
              onChange={handleChange}
              name="code"
            ></Input>
          </div>

          <button type="submit" className="login-btn">
            登录
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
