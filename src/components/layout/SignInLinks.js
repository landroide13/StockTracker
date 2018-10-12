import React from 'react'
import { NavLink } from 'react-router-dom'

const SignInLinks = () => {


  return (

    <React.Fragment>

      <ul className="right">
        <li><NavLink to="/add">Add Stock</NavLink></li>
        <li><a onClick>LogOut</a></li>
        <li><NavLink to="/" className="btn btn-floating green lighten-1">WB</NavLink></li>
      </ul>
      
    </React.Fragment>
  )
}

export default SignInLinks
