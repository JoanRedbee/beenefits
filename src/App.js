import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import RecurringBenefitsList from './components/benefits/RecurringBenefitsList';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/forecast" component={RecurringBenefitsList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
