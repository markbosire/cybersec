// App.js
import React from 'react';
import { Router, Route } from 'wouter';
import Home from './pages/Home';
import Events from './pages/Events';
import Team from './pages/Team';
import Join from './pages/Join';
import Login from './pages/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      
     
      <Router>
        <Route path="/" component={Home} />
        <Route path="/Events" component={Events} />
        <Route path='/Team' component={Team}/>
        <Route path='/Join' component={Join}/>
        <Route path='/Login' component={Login}/>
        {/* Add more routes as needed */}
      </Router>
    </div>
  );
}

export default App;
