import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Campaign from './Pages/Campaign/Campaign';
import WorkerDashboard from './Pages/WorkerDashboard/WorkerDashboard';

function App() {
  return (
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Dashboard} />

          <Route path="/campaign/:id" component={Campaign} />
          <Route path="/worker/:id" component={WorkerDashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
