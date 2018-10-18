
const initState = {
  stocks: [
    {id:'1', symbol: 'AA', comment: 'cheack at 33.5'},
    {id:'2', symbol: 'BB', comment: 'cheack at 3.5'},
    {id:'3', symbol: 'AAPL', comment: 'cheack at 98.5'},
    {id:'4', symbol: 'GOOG', comment: 'cheack at 37.5'},
  ]
}


const stockReducer = (state = initState, action) => {
  switch(action.type){
    case 'ADD_STOCK':
      console.log('Added Stock', action.stock)
      return state;
    case 'ADD_STOCK_ERROR':
      console.log('Error Adding Stock', action.err);
      return state;
    default:
      return state
  }
}


export default stockReducer;