import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from 'components/home/app';
import NotFound from 'components/pageNotFound/pageNotFound';
import Page1 from 'components/pages/page1';
import Page2 from 'components/pages/page2';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact={true} path={'/'} component={App} />
            <Route exact={true} path={'/page1'} component={Page1} />
            <Route exact={true} path={'/page2'} component={Page2} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);