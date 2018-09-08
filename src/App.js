import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import './components/SiteMenu.css';

import Home from './pages/Home';
import Test from './pages/Test';
import SiteMenu from './components/SiteMenu';

const items = [
    {link:'/', title: 'Home'},
    {link:'/test', title: 'Test'},]

class App extends Component {
    constructor(props){
        super(props);
        this.items = items;
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <SiteMenu items = {this.items} />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/test" component={Test}/>
          </Switch>
      </div>
    );
  }
}

export default App;
