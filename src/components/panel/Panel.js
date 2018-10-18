import React, { Component } from 'react'
import Portfolio from '../stock/Portfolio'


import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Panel extends Component {


  render() {

    const { stocks,auth } = this.props;

    if(!auth.uid) return <Redirect to='/signin' />

    return (
      <React.Fragment>
        <div className="container panel">
          <div className="row">
            <div className="col s12 m6">
              <h2>Portfolio</h2>
              <Portfolio stocks={stocks} />
            </div>
            <div className="col s12 m6 offset-m1"></div>
          </div>
        </div>
        
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) =>{
  console.log(state)
  return {
    stocks: state.firestore.ordered.stocks,
    auth: state.firebase.auth
  }
}



export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'stocks'}
  ])
)(Panel)
