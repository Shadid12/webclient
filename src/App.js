import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';

class App extends Component {
  render() {
    return (
      <Router>
      	<div>
	        <Route exact path="/" component={Home}/>
	        <Route exact path="/admin" component={Admin}/>
	    </div>
      </Router>
    );
  }
}

export default App;
