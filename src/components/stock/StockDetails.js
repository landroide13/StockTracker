import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'; 
import { Redirect } from 'react-router-dom';
import moment from 'moment'

const StockDetails = (props) => {

  const { stock, auth } = props;
  if(!auth.uid) return <Redirect to = '/signin' />
  
  if(stock){
    return(
      <div className="container section stock-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Stock { stock.symbol } </span>
            <p>{ stock.comment }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <p className="grey-text">{ moment(stock.createdAt.toDate()).calendar() }</p>
          </div>
        </div>
      </div>
    )
  }else{
    return(
      <div className="container center">
        <p>Loading Stock....</p>
      </div>
    )
  }

  
 }


const mapStateToProps = (state, ownProps) =>{
  const id = ownProps.match.params.id
  const stocks = state.firestore.data.stocks
  const stock = stocks ? stocks[id] : null
  return{
    stock: stock,
    auth: state.firebase.auth
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'stocks'}
  ])
)(StockDetails);


