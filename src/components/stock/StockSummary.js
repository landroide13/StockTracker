import React from 'react'
// import Stock from './StockDetails'

const StockSummary = () => {
  // constructor(){
  //   super();
  //   this.state = {
  //     stock: []
  //   }
  // }

  // componentWillMount(){
  //   fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=QS9W4NO731ZGBQIC')
  //   .then(res => res.json())
  //   .then(data => Object.entries(data['Time Series (Daily)']).map(date =>(
  //     {
  //       date: date[0],
  //       open: date[1]['1. open'],
  //       high: date[1]['2. high'],
  //       low: date[1]['3. low'],
  //       close: date[1]['4. close']
  //     }
  //   )))
  //   .then(stock => this.setState({ stock }))
  // }

  
    return (
      <React.Fragment>

         <div className="card z-depth-0 project-sumary">
          <div className="card-content grey-text text-darken-3">
              <span className="card-title">Stock Symbol</span>
              <p>Coment</p>
              <p className="grey-text">Dated</p>
          </div>
        </div>

        

      </React.Fragment>
    )
  
}

export default StockSummary
