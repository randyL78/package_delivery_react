// React libraries and 3rd party libraries
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

// Custom imports
import './css/App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Container from './components/Main/Main';
import Home from './components/Main/Home';

class App extends Component {

  state = {
    currentPackage: {
      schedule: {
        date  : "Thursday, Aug 15th, 2018",
        time  : "3:00 PM to 8:00 PM",
        where : "123 Easy St. Anywhere, VA"
      },
      weather: {
        low   : "68 F",
        high  : "74 F",
        cond  : "Partly Cloudy"
      }
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Header />
          <Switch>
            <Route exact path="/home" render={() => <Home currentPackage={this.state.currentPackage} />} />
            <Route exact path="/view" render={() => <Container title="View" />} />
            <Route exact path="/add" render={() => <Container title="Add" />} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
