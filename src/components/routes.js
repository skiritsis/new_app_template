import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from 'components/loading/loading';

const LoadableApp = Loadable({
    loader: () => import('components/home/app'),
    loading: Loading
});

const LoadablePage1 = Loadable({
    loader: () => import('components/pages/page1'),
    loading: Loading
});

const LoadablePage2 = Loadable({
    loader: () => import('components/pages/page2'),
    loading: Loading
});

const LoadableNotFound = Loadable({
    loader: () => import('components/pageNotFound/pageNotFound'),
    loading: Loading
});

export default class Routes extends Component{

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path={'/'} component={LoadableApp} />
                    <Route exact={true} path={'/page1'} component={LoadablePage1} />
                    <Route exact={true} path={'/page2'} component={LoadablePage2} />
                    <Route component={LoadableNotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}