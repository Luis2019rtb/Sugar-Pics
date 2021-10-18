import React, { Suspense, lazy } from 'react';
import GeneralLoading from '../components/util-components/GeneralLoading'
import { Route, Switch } from 'react-router-dom';

const index = () => {
    return (
        <Suspense fallback={<GeneralLoading />} >
            <Switch>
                <Route exact path="/" component={lazy(() => import('./Main'))} />
                <Route exact path="/home" component={lazy(() => import('./Home'))} />
                <Route exact path="/gallery" component={lazy(() => import('./Gallery'))} />
                <Route exact path="/profile" component={lazy(() => import('./Profile'))} />
            </Switch>
        </Suspense>

    )
}

export default index;