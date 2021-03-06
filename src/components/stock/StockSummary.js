import React from 'react'
import moment from 'moment'
// import Stock from './StockDetails'

const StockSummary = ({ stock }) => {
  // constructor(){
  //   super();
  //   this.state = {
  //     stock: []
  //   }
  // }

  
    return (
      <React.Fragment>

         <div className="card z-depth-0 project-sumary">
          <div className="card-content grey-text text-darken-3">
              <span className="card-title">{ stock.symbol}</span>
              <p>{ stock.comment }</p>
              <p>{stock.authorFirstName} {stock.authorLastName} ' Portfolios</p>
              <p className="grey-text">{ moment(stock.createdAt.toDate()).calendar() }</p>
          </div>
        </div>

        

      </React.Fragment>
    )
  
}

export default StockSummary
