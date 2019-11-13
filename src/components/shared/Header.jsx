import React from 'react'
import { Link } from 'react-router-dom'
import { isAuth } from '../../utils/auth'
import { logout } from '../../utils/authRequests'

class Header extends React.Component {
  
  render () {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>Home <span className='sr-only'>(current)</span></Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/register'>Register</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>Login</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/logout'>Logout</Link>
            </li>
          </ul>
        </div>
        {isAuth() && <span>Hello {this.props.username}</span>}
      </nav>
    )
  }
}

export default Header
