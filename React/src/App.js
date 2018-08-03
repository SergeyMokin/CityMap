import React, { Component, Fragment } from 'react';
import NavBar from './Components/NavBar';
import AppBody from './Components/AppBody';
import { Provider } from 'react-redux';
import store from './Store/Store'
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
 
class App extends Component {
  render() {
    return (
      <Router>
        <Provider store = {store}>
          <Fragment className="full-size">
            <NavBar />
            <AppBody />
          </Fragment>
        </Provider>
      </Router>
    );
  }
}

export default App;
