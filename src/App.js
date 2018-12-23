// React libraries and 3rd party libraries
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

// Custom imports
import './css/App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Header />
          <Switch>
            <Route exact path="/home" render={() => <h1>Home</h1>} />
            <Route exact path="/view" render={() => <h1>View</h1>} />
            <Route exact path="/add" render={() => <h1>Add</h1>} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
