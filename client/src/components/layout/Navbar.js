import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
	const authLinks = (
		<ul>
			<li>
				<Link to='/favorites'>Favorites</Link>
			</li>
			<li>
				<Link to='/profiles'>Characters</Link>
			</li>
			<li>
				<Link to='/' onClick={logout}>
					<i className='fas fa-sign-out-alt' /> <span>Logout</span>
				</Link>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul>
			<li>
				<Link to='/register'>Register</Link>
			</li>
			<li>
				<Link to='/login'>Login</Link>
			</li>
		</ul>
	);

	return (
		<nav className='navbar bg-dark'>
			<h1>
				<Link to='/'>
					<i className='fas fa-code'></i> Rick & Morty
				</Link>
			</h1>
			{!loading && isAuthenticated && (
				<p style={{ cursor: 'default' }}>
					Hi {user.name.split(' ').slice(0, 1)}!
				</p>
			)}
			{!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
