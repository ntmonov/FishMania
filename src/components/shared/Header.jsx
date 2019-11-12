import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>

      <div class='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul class='navbar-nav mr-auto'>
          <li class='nav-item active'>
            <Link class='nav-link' to='/'>Home <span class='sr-only'>(current)</span></Link>
          </li>
          <li class='nav-item'>
            <Link class='nav-link' to='/register'>Register</Link>
          </li>
          <li class='nav-item'>
            <Link class='nav-link' to='/login'>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
