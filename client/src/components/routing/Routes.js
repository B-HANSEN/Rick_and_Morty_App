import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import NotFound from '../layout/NotFound';
import Profiles from '../profiles/Profiles';
import Details from '../profiles/Details';
// import { v4 as uuidv4 } from 'uuid';

const Routes = () => {
	return (
		<section className='container'>
			<Alert />
			<Switch>
				<Route exact path='/register' component={Register} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/profiles' component={Profiles} />
				<Route exact path='/profiles/:id' component={Details} />
				<Route component={NotFound} />
			</Switch>
		</section>
	);
};

export default Routes;
