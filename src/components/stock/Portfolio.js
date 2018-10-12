import React from 'react'
import StockSummary from './StockSummary'

const Portfolio = () => {
  return (
    <React.Fragment>
      <div className="stock-list section">

       <StockSummary />

       <StockSummary />

       <StockSummary />
       
      </div>
      
    </React.Fragment>
  )
}

export default Portfolio;
