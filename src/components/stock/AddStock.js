import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStock } from '../../store/actions/stockAction';
import { Redirect } from 'react-router-dom';

class AddStock extends Component {
  constructor(props){
    super(props);
    this.state = {
      symbol: '',
      comment:''
    }
  }

  handleChange = e =>{
    console.log(e)
    this.setState({ [e.target.id]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault();
    // console.log(this.state)
    this.props.addStock(this.state)
  }


  render() {

    const { auth } = this.props

    if(!auth.uid) return <Redirect to='/signin' />

    return (
      <React.Fragment>

        <div className="container">
          <form onSubmit={this.onSubmit} className="white">
            <h5 className="grey-text text-darken-3">Add Stock</h5>
            <div className="input-field">
              <label htmlFor="symbol">Stock</label>
              <input id="symbol" type="text" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <label htmlFor="comment">Comment</label>
              <input id="comment" type="text" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <button className="btn green">Add Stock</button>
            </div>
          </form>  
        </div>
        
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    auth: state.firebase.auth
  }
}


const mapDispatchToProps = (dispatch) =>{
  return{
    addStock: (stock) => dispatch(addStock(stock))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddStock)