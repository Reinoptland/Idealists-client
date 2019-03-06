import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import SignupForm from './components/Signup/SignupForm';
import Dashboard from './components/Dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Route exact path="/dashboard" component ={Dashboard} />
            <Route exact path="/signup" component={SignupForm} />
          </header>
        </div>


      </Router>

    );
  }
}

export default App;
