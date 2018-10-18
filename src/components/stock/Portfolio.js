import React from 'react'
import StockSummary from './StockSummary'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

const Portfolio = ({ stocks, auth }) => {


  if(!auth.uid) return <Redirect to='/signin' />

  return (
    <React.Fragment>
      <div className="stock-list section">
        { stocks && stocks.map(stock =>{
          return (
           <Link to={'/stock/' + stock.id} key={stock.id} ><StockSummary stock={stock} /></Link> 
          )
        })}
       
      </div>
      
    </React.Fragment>
  )
}

const mapStateToProps = (state) =>{
  return{
    auth: state.firebase.auth
  }
}


export default connect(mapStateToProps)(Portfolio);
