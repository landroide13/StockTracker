import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'

const SignInLinks = (props) => {

  

  return (

    <React.Fragment>

      <ul className="right">
        <li><NavLink to="/add">Add Stock</NavLink></li>
        <li><a onClick={props.signOut}>LogOut</a></li>
        <li><NavLink to="/" className="btn btn-floating green lighten-1">WB</NavLink></li>
      </ul>
      
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch) =>{
  return{
    signOut: () => dispatch(signOut())
  }
}



export default connect(null, mapDispatchToProps)(SignInLinks)
