import React                                     from 'react';
import ReactDOM                                  from 'react-dom';
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';

import App                                       from './App';
import Chat                                      from './components/chat';
import Home                                      from './components/home';
import Matches                                   from './components/matches';
import './index.css';

import registerServiceWorker                     from './registerServiceWorker';

ReactDOM.render(
    <Router basename="/">
        <Switch>
            <App>
                <Route exact path="/" component={Home} />
                <Route exact path="/chat" component={Chat} />
                <Route exact path="/matches" component={Matches} />
            </App>
        </Switch>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
