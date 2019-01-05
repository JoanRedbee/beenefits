import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import RecurringBenefits from './components/layout/RecurringBenefits';
import Expenses from './components/layout/Expenses';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/recurring" component={RecurringBenefits} />
            <Route path="/expenses" component={Expenses} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
