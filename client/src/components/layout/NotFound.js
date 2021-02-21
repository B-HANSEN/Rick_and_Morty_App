import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<>
			<h1 className='x-large text-primary'>
				<i className='fas fa-exclamation-triangle'> Page Not Found</i>
			</h1>
			<p className='large'>Sorry, this page does not exist.</p>
			<Link to='/profiles' className='btn btn-light'>
				Back to all characters
			</Link>
		</>
	);
};

export default NotFound;
