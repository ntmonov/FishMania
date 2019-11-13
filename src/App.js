import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Home from './components/home/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Logout from './components/auth/Logout'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedInUser: ''
    }
    this.getLoggedInUser = this.getLoggedInUser.bind(this)
    this.clearUser = this.clearUser.bind(this)
  }

  getLoggedInUser (username) {
    this.setState({ loggedInUser: username })
  }

  clearUser () {
    this.setState({ loggedInUser: '' })
  }

  render () {
    return (
      <>
        <Header username={this.state.loggedInUser} />
        <Route path='/' exact component={Home} />
        <Route path='/register' render={(props) => <Register getUser={this.getLoggedInUser} />} />
        <Route path='/login' component={Login} />
        <Route path='/logout' render={(props) => <Logout clearUser={this.clearUser} />} />
        <Footer />
      </>
    )
  }
}

export default App
