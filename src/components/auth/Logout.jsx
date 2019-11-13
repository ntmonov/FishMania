import React from 'react'
import { withRouter } from 'react-router-dom'
import { logout } from '../../utils/authRequests'

class Logout extends React.Component {
  componentDidMount () {
    this.logout()
  }

  async logout () {
    await logout
    window.localStorage.clear()
    this.props.clearUser()
    this.props.history.push('/')
  }

  render () {
    return null
  }
}

export default withRouter(Logout)
