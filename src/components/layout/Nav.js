import React from 'react'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <React.Fragment>

      <nav>
        <div className="nav-wrapper black">
          <Link to="/" className="brand-logo">Stocks</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <SignInLinks />
            <SignOutLinks />
          </ul>
        </div>
      </nav>
      
    </React.Fragment>
  )
}

export default Nav;
