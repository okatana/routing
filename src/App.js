import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import './components/SiteMenu.css';

import Home from './pages/Home';
import Test from './pages/Test';
import CountryPage from './pages/CountryPage'

import NotFound from './pages/NotFound';

import SiteMenu from './components/SiteMenu';

const items = [
    {link:'/', title: 'Главная'},
    {link:'/test', title: 'Test'},
    {link:'/country', title: 'CountryPage'},
]

class App extends Component {
    constructor(props){
        super(props);
        this.items = items;
    }

  render() {
    return (
      <div className="App">
          <SiteMenu items = {this.items} />
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/test" component={Test}/>
              <Route path ="/country" component={CountryPage}/>
              <Route path="*" component={NotFound}/>
          </Switch>
      </div>
    );
  }
}

export default App;
