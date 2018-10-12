import React, { Component } from 'react'
import Portfolio from '../stock/Portfolio'
// import AddStock from '../stock/AddStock'

class Panel extends Component {


  render() {
    return (
      <React.Fragment>
        <div className="container panel">
          <div className="row">
            <div className="col s12 m6">
              <h2>Portfolio</h2>
              <Portfolio />
            </div>
            <div className="col s12 m6 offset-m1"></div>
          </div>
        </div>
        
      </React.Fragment>
    )
  }
}


export default Panel
