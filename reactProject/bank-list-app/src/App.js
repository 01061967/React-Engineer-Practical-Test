import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import BankDetail from './components/BankDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/banks/:id" component={BankDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
