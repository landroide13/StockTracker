import React from 'react'

const StockDetails =  (props) => {

  // const { date, open, close} = props
  
  const id = props.match.params.id
  return (
    <React.Fragment>

      <div className="container section stock-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">Stock Symbol {id}</span>
              <p>Comment</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>Now</div> 
            </div>
          </div>
      </div>
       
    </React.Fragment>
  )
}

export default StockDetails;
