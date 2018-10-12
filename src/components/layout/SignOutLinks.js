import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {


  return (

    <React.Fragment>

      <ul className="right">
        <li><NavLink to="/signup">SignUp</NavLink></li>
        <li><NavLink to="/signin">SignIn</NavLink></li>
      </ul>
      
    </React.Fragment>
  )
}
