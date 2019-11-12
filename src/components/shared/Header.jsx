import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
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
        </ul>
      </div>
    </nav>
  )
}

export default Header
