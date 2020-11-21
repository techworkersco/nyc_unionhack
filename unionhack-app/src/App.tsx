import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Campaign from './Pages/Campaign/Campaign';
import WorkerDashboard from './Pages/WorkerDashboard/WorkerDashboard';

function App() {
  return (
    <Router>
      <>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/campaign/:id" component={Campaign} />
          <Route path="/worker/:id" component={WorkerDashboard} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
