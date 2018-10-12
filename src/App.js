import React, { Component } from 'react';
import Stocks from './components/stock/StockSummary'
import StockForm from './components/stock/AddStock'
import Nav from './components/layout/Nav'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
       
        <div className="container">
          <div className="row">

            <div className="col s6">
              <StockForm />
            </div>

            <div className="col s6">
              <Stocks />
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
