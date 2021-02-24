import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { loadUser } from '../../actions/auth';
import { getProfileById } from '../../actions/profile';
import { addToFavorites } from '../../actions/favorite';
import formatDate from '../../utils/formatDate';

const Details = ({
	getProfileById,
	addToFavorites,
	removeFromFavorites,
	profile: { profile, loading },
	auth: { user },
	match,
}) => {
	useEffect(() => {
		loadUser();
		getProfileById(match.params.id);
	}, [getProfileById, match.params.id]);

	const handleAdding = async user => {
		await addToFavorites(profile.id, profile.name, user._id);
	};
	// const handleRemove = async auth => {
	// 	await removeFromFavorites(profile.id, auth.user._id);
	// };

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<div className='details-page'>
					<div>
						<h1 className='large text-primary'>Character's detail view</h1>
						<p className='lead'>
							<i className='fab fa-connectdevelop' /> Here you can find more
							details about {profile.name}
						</p>
						<div>
							{user?.favorites?.includes(profile.name) ? (
								<p className='text-note'>
									Note: This character has already been added to your favorites
									list.
								</p>
							) : null}
						</div>
					</div>

					<div className='details bg-dark'>
						<div>
							<img src={profile.image} alt='profileImage' />
							<div className='favourite'>
								<h2 className='detail-name my-1'>
									{profile.name.length > 20
										? profile.name.slice(0, 20) + '...'
										: profile.name}
								</h2>
								<p className='favourite-star my-1'>
									{user?.favorites.includes(profile.name) ? (
										<i className='fas fa-star' />
									) : (
										<i className='far fa-star' />
									)}
								</p>
							</div>
						</div>

						<div className='details-right'>
							<div className='my-1'>
								{profile.status === 'unknown' && (
									<i className='far fa-circle' />
								)}
								{profile.status === 'Alive' && (
									<i className='fas fa-circle text-success' />
								)}
								{profile.status === 'Dead' && (
									<i className='fas fa-circle text-danger' />
								)}{' '}
								{profile.status} - {profile.species}
							</div>
							<div className='my-1'>
								<span className='item'>Gender:</span>
								<br />
								{profile.gender}
							</div>
							<div className='my-1'>
								<span className='item'>First seen in:</span>
								<br />
								{profile.origin.name}
							</div>
							<div className='my-1'>
								<span className='item'>Last known location:</span>
								<br />
								{profile.location.name}
							</div>
							<div className='my-1'>
								<span className='item'>Character created:</span>
								<br />
								{formatDate(profile.created)}
							</div>
						</div>
					</div>

					<Link to='/profiles' className='btn btn-primary'>
						Return to characters overview
					</Link>
					{!user?.favorites.includes(profile.name) ? (
						<button
							className='btn btn-primary'
							onClick={e => handleAdding(user)}
						>
							Add to favorites
						</button>
					) : (
						<button className='btn-disabled' disabled>
							Add to favorites
						</button>
					)}
				</div>
			)}
		</>
	);
};

Details.propTypes = {
	loadUser: PropTypes.func.isRequired,
	getProfileById: PropTypes.func.isRequired,
	addToFavorites: PropTypes.func.isRequired,
	// removeFromFavorites: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	profile: state.profile,
	auth: state.auth,
});

export default connect(mapStateToProps, {
	loadUser,
	getProfileById,
	addToFavorites,
	// removeFromFavorites,
})(Details);
