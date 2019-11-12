import React from 'react'
import { register } from '../../utils/authRequests'

class Register extends React.Component {
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
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const name = e.target.name
    const value = e.target.value
    const user = this.state.user
    user[name] = value
    this.setState({ user })
  }

  saveSession (user) {
    window.sessionStorage.setItem('username', user.username)
    window.sessionStorage.setItem('token', user._kmd.authtoken)
  }

  handleSubmit (e) {
    e.preventDefault()
    if (!this.validateUser(this.state.user)) {
      return
    }
    const user = this.state.user
    delete user.repeatPass
    register(user).then(res => res.json()).then(user => { this.saveSession(user); this.props.history.push('/') }).catch(e => console.error)
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
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input type='text' className='form-control' id='username' name='username' value={this.state.user.username} onChange={this.handleChange} />
            {this.state.errors.username && <div className='text-danger'>{this.state.errors.username}</div>}
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' className='form-control' id='password' name='password' value={this.state.user.password} onChange={this.handleChange} />
            {this.state.errors.password && <div className='text-danger'>{this.state.errors.password}</div>}
          </div>
          <div className='form-group'>
            <label htmlFor='repeatPass'>Repeat Password</label>
            <input type='password' className='form-control' id='repeatPass' name='repeatPass' value={this.state.user.repeatPass} onChange={this.handleChange} />
            {this.state.errors.repeatPass && <div className='text-danger'>{this.state.errors.repeatPass}</div>}
          </div>

          <button type='submit' className='btn btn-primary'>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default Register
