import React, { Component } from 'react'

class AddStock extends Component {
  constructor(props){
    super(props);
    this.state = {
      symbol: '',
      coment:''
    }
  }

  handleChange = e =>{
    console.log(e)
    this.setState({ [e.target.id]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state)
  }


  render() {


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
              <label htmlFor="coment">Comment</label>
              <input id="coment" type="text" onChange={this.handleChange} />
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


export default AddStock