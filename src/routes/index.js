import { lazy } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AuthLayout from '../layouts/Auth'


// Lazy Imports

const PRIVATE_RUOUT_LIST = [

    {
        path: '/',
        exact: true,
        component: () => <AuthLayout />
    }
]

const Routes = props => (
    <>
        {/* <div>
            <ul>
                {PRIVATE_RUOUT_LIST.map(item => (<li><Link to={`${item.path}`} >{item.path}</Link></li>))}
            </ul>
        </div> */}

        <Switch>
            {PRIVATE_RUOUT_LIST.map(item => {
                return (
                    <Route exact={item.exact} path={item.path} >
                        <item.component />
                    </Route>
                )
            })}
        </Switch>
    </>
)

export default Routes;