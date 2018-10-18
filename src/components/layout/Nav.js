import React from 'react'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const Nav = (props) => {

  const { auth } = props
  // console.log(auth)

  const links = auth.uid ? <SignInLinks /> : <SignOutLinks />

  return (
    <React.Fragment>

      <nav>
        <div className="nav-wrapper black">
          <Link to="/" className="brand-logo">Stocks</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            { links }
          </ul>
        </div>
      </nav>
      
    </React.Fragment>
  )
}

const mapStateToProps = (state) =>{
  console.log(state)
  return {
    auth: state.firebase.auth
  }
}


export default connect(mapStateToProps)(Nav);
