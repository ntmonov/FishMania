import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Home from './components/home/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'

class App extends React.Component {
  render () {
    return (
      <>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Footer />
      </>
    )
  }
}

export default App
