import React from 'react'
import { withRouter } from 'react-router-dom'
import { login } from '../../utils/authRequests'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        username: '',
        password: ''
      },
      errors: {
        username: '',
        password: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit (e) {
    e.preventDefault()
    if (!this.validateUser(this.state.user)) {
      return
    }
    let user
    try {
      const userFromState = this.state.user
      user = await login(userFromState).then(res => res.json())
      this.saveSession(user)
    } catch (e) {
      console.error(e)
      return
    }
    this.props.getUser(user.username)
    this.props.history.push('/')
  }

  handleChange (e) {
    const name = e.target.name
    const value = e.target.value
    const user = this.state.user
    user[name] = value
    this.setState({ user })
  }

  saveSession (user) {
    window.localStorage.setItem('username', user.username)
    window.localStorage.setItem('token', user._kmd.authtoken)
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

    this.setState({ errors })
    return isValid
  }

  render () {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input type='text' className='form-control' id='username' name='username' value={this.state.user.username || ''} onChange={this.handleChange} />
            {this.state.errors.username && <div className='text-danger'>{this.state.errors.username}</div>}
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' className='form-control' id='password' name='password' value={this.state.user.password || ''} onChange={this.handleChange} />
            {this.state.errors.password && <div className='text-danger'>{this.state.errors.password}</div>}
          </div>
          <button type='submit' className='btn btn-primary'>Sign In</button>
        </form>
      </div>
    )
  }
}

export default withRouter(Login)
