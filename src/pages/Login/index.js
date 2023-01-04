import React from 'react'
import NavBar from '@/components/NavBar'
import styles from './index.module.scss'
import Input from '@/components/Input'
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
    validate: (values) => {
      const errors = {}
      if (!values.mobile) {
        errors.mobile = '手机号不能为空'
      }
      if (!values.code) {
        errors.code = '验证码不能为空'
      }
      return errors
    },
  })

  const {
    values: { mobile, code },
    handleChange,
    handleSubmit,
    handleBulr,
    errors,
    touched,
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
            {touched.mobile && errors.mobile ? (
              <div className="validate">{errors.mobile}</div>
            ) : null}
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
            {touched.code && errors.code ? (
              <div className="validate">{errors.code}</div>
            ) : null}
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
