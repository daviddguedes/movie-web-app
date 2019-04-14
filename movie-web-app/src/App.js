import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import store from './store';
import Topo from './components/topo/Topo';
import Main from './components/main/Main';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Topo />
          <Route exact path="/" component={Main} />
        </Router>
      </Provider>
    );
  }
}

export default App;
