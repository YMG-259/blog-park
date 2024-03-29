import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
const Login = React.lazy(() => import('./pages/Login'))
const Layout = React.lazy(() => import('./pages/Layout'))
const ProfileEdit = React.lazy(() => import('./pages/Profile/Edit'))
export default function App() {
  return (
    <Router>
      <div className="app">
        <Suspense callback={<div>loading</div>}>
          <Switch>
            <Redirect exact from="/" to="/home"></Redirect>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Layout}></Route>
            <Route path="/profile/edit" component={ProfileEdit}></Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}
