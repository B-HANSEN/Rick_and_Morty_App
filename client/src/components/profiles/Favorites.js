import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFavorites } from '../../actions/favorite';
import { loadUser } from '../../actions/auth';

const Favorites = ({ getFavorites, auth: { user } }) => {
	useEffect(() => {
		loadUser();
		getFavorites();
	}, [loadUser, getFavorites]);

	return (
		<>
			<h1 className='large text-primary'>Favorites overview</h1>
			<p className='lead'>
				<i className='fab fa-connectdevelop' /> Here you can find all favorite
				characters for {user.name}
			</p>

			{user.favorites.length > 0 ? (
				user.favorites.map((favorite, id) => {
					return <li key={id}>{favorite}</li>;
				})
			) : (
				<p>No favorites selected yet.</p>
			)}

			<Link to='/profiles' className='btn btn-primary'>
				Return to characters overview
			</Link>
		</>
	);
};

Favorites.propTypes = {
	loadUser: PropTypes.func.isRequired,
	getFavorites: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { loadUser, getFavorites })(Favorites);
