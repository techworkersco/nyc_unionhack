import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Campaign from './Pages/Campaign/Campaign';
import WorkerProfile from './Pages/WorkerProfile/WorkerProfile';
import Conversations from './Pages/WorkerProfile/Conversations/Conversations';

function App() {
  return (
    <Router>
      <>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/campaign/:id" component={Campaign} />
          <Route exact path="/worker/:id" component={WorkerProfile} />
          <Route exact path="/worker/:id/conversations/:id" component={Conversations} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
