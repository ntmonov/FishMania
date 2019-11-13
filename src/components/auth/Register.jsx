import React from 'react'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.handleRegister()
  }

  render () {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input type='text' className='form-control' id='username' name='username' value={this.props.user.username || ''} onChange={this.props.handleChange} />
            {this.props.errors.username && <div className='text-danger'>{this.props.errors.username}</div>}
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' className='form-control' id='password' name='password' value={this.props.user.password || ''} onChange={this.props.handleChange} />
            {this.props.errors.password && <div className='text-danger'>{this.props.errors.password}</div>}
          </div>
          <div className='form-group'>
            <label htmlFor='repeatPass'>Repeat Password</label>
            <input type='password' className='form-control' id='repeatPass' name='repeatPass' value={this.props.user.repeatPass || ''} onChange={this.props.handleChange} />
            {this.props.errors.repeatPass && <div className='text-danger'>{this.props.errors.repeatPass}</div>}
          </div>

          <button type='submit' className='btn btn-primary'>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default Register
