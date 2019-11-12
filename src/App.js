import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Home from './components/home/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Header from './components/shared/Header'

class App extends React.Component {
  render () {
    return (
      <>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </>
    )
  }
}

export default App
