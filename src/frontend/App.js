import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import home from './home.js'
import login from './login.js';
import notFound from './notfound.js'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path='/' component={home} />
              <Route exact path='/login' component={login} />
              <Route path="*" component={notFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
