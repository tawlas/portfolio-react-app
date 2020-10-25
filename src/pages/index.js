import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

const PREFIX_ROUTE = "portfolio-react-app"
const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path={`/${PREFIX_ROUTE}/`}>
          <Me user={user} />
        </Route>
        <Route path={`/${PREFIX_ROUTE}/projects`}>
          <Projects user={user} />
        </Route>
        <Route path={`/${PREFIX_ROUTE}/work`}>
          <Work user={user} />
        </Route>
        <Route path={`/${PREFIX_ROUTE}/education`}>
          <Education user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;
