import React, { Component } from 'react'

class AddStock extends Component {
  constructor(props){
    super(props);
    this.state = {
      symbol: ''
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

        <div className="row">
          <form onSubmit={this.onSubmit}>
            <div className="input-field col s6">
              <label htmlFor="symbol">Stock</label>
              <input id="symbol" type="text" onChange={this.handleChange} />
              <button className="btn green">Add</button>
            </div>
          </form>  
        </div>
        
      </React.Fragment>
    )
  }
}


export default AddStock