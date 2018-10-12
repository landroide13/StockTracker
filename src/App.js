import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Panel from './components/panel/Panel'
import StockDetails from './components/stock/StockDetails'
import AddStock from './components/stock/AddStock'
import Nav from './components/layout/Nav'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />

          <Switch>
            <Route exact path="/" component={Panel}></Route>
            <Route path="/stock/:id" component={StockDetails}></Route>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/add" component={AddStock}></Route>
          </Switch>

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
