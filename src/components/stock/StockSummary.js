import React, { Component } from 'react'
import Stock from './StockDetails'

class StockSummary extends Component {
  constructor(){
    super();
    this.state = {
      stock: []
    }
  }

  componentWillMount(){
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=QS9W4NO731ZGBQIC')
    .then(res => res.json())
    .then(data => Object.entries(data['Time Series (Daily)']).map(date =>(
      {
        date: date[0],
        open: date[1]['1. open'],
        high: date[1]['2. high'],
        low: date[1]['3. low'],
        close: date[1]['4. close']
      }
    )))
    .then(stock => this.setState({ stock }))
  }

  render() {

    const { stock } = this.state

    let stockdata = stock.map(st =>{
      return <Stock  key={st.date} date={st.date} open={st.open} close={st.close} />
    })

    return (
      <React.Fragment>

        <div className="container">
          <table>
            <thead>
              <tr>
                  <th>Date</th>
                  <th>Open</th>
                  <th>Close</th>
              </tr>
            </thead>
            { stockdata }
          </table>  

        </div>

      </React.Fragment>
    )
  }
}

export default StockSummary
