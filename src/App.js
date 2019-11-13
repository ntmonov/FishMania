import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Home from './components/home/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import { register } from '../src/utils/authRequests'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        username: '',
        password: '',
        repeatPass: ''
      },
      errors: {
        username: '',
        password: '',
        repeatPass: ''
      },
      loggedUser: ''
    }
    this.onhandleInputChange = this.onhandleInputChange.bind(this)
    this.validateUser = this.validateUser.bind(this)
    this.registerUser = this.registerUser.bind(this)

  }

  onhandleInputChange (e) {
    const name = e.target.name
    const value = e.target.value
    const user = this.state.user
    user[name] = value
    this.setState({ user })
  }

  saveSession (user) {
    window.sessionStorage.setItem('username', user.username)
    window.sessionStorage.setItem('token', user._kmd.authtoken)
    this.setState({ loggedUser: user.username })
  }

  registerUser () {
    if (!this.validateUser(this.state.user)) {
      return
    }
    const user = this.state.user
    delete user.repeatPass
    register(user).then(res => res.json()).then(user => { this.saveSession(user); window.location.href = '/' }).catch(e => console.error)
  }

  validateUser (user) {
    let isValid = true
    const errors = {}
    if (!/^[A-Za-z]{3,}$/.test(user.username)) {
      isValid = false
      errors.username = 'Username must be at laest 3 letters'
    }

    if (!/^[A-Za-z0-9]{3,}$/.test(user.password)) {
      isValid = false
      errors.password = 'Password must be at laest 3 letters or digits'
    }

    if (user.password !== user.repeatPass) {
      isValid = false
      errors.repeatPass = 'Passwords do not match'
    }

    this.setState({ errors })
    return isValid
  }

  render () {
    return (
      <>
        <Header username={this.state.loggedUser} />
        <Route path='/' exact component={Home} />
        <Route path='/register' render={(props) => <Register handleRegister={this.registerUser} handleChange={this.onhandleInputChange} user={this.state.user} errors={this.state.errors} />} />
        <Route path='/login' component={Login} />
        <Footer />
      </>
    )
  }
}

export default App
