import React, { Component } from 'react';
import './App.css';
import {Switch, Route}  from 'react-router-dom';
import { Communities, Home, Settings, SignUp, SpecificCommunity } from "./pages";
import { LoginForm } from './components';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/communities/:name" component={ SpecificCommunity }/>
          <Route path="/communities" component={ Communities } />
          <Route path="/settings" component={ Settings } />
          <Route path="/signup" component={ SignUp } />
          <Route path="/login" component={ LoginForm } />
          <Route path="/" component={ Home } />
        </Switch>
      </>
    );
  }
}

export default App;
