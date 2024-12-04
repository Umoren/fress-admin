import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { HOME } from './constants';

const HomePage = React.lazy(() => import('pages/HomePage/Loadable'));

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path={HOME} component={HomePage} />
            </Switch>
        </BrowserRouter>
    )

}