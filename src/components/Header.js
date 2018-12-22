import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="header">
      <div className="header__logo"> image </div>

      <div className="header__links">
        <ul>
          <li> Home </li>
          <Link to="/register"> Signup/ Signin </Link>
          <li> Home </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
