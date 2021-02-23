import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { loadUser } from '../../actions/auth';
import { getProfileById } from '../../actions/profile';
import {
	getFavorites,
	addToFavorites,
	removeFromFavorites,
} from '../../actions/favorite';
import formatDate from '../../utils/formatDate';
// import { useLocation } from 'react-router-dom';

const Details = ({
	getProfileById,
	getFavorites,
	addToFavorites,
	removeFromFavorites,
	profile: { profile, loading },
	auth,
	match,
}) => {
	// const { _id, favorites } = auth.user;
	// const location = useLocation();
	useEffect(() => {
		loadUser();
		getProfileById(match.params.id);
	}, [loadUser, getProfileById, match.params.id]);

	const handleAdding = async auth => {
		// await addToFavorites(profile.id, auth.user._id);
		await addToFavorites(profile.id, auth.user._id);
	};

	// const handleRemoving = async auth => {
	// 	await removeFromFavorites(auth.user._id, profile.id);
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
							{auth?.user?.favorites?.includes(profile.id) ? (
								<p className='text-note'>
									Note: This character has already been added to your favorites
									list.
								</p>
							) : null}
						</div>
					</div>

					<div className='details bg-dark'>
						<div className='details-photo'>
							<img src={profile.image} alt='profileImage' />
							<div className='favourite'>
								<h2 className='detail-name my-1'>
									{profile.name.length > 20
										? profile.name.slice(0, 20) + '...'
										: profile.name}
								</h2>
								<p className='favourite-star my-1'>
									{auth?.user?.favorites.includes(profile.id) ? (
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
					{!auth?.user?.favorites?.includes(profile.id) ? (
						<button
							className='btn btn-primary'
							onClick={e => handleAdding(auth)}
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
	// getFavorites: PropTypes.func.isRequired,
	addToFavorites: PropTypes.func.isRequired,
	removeFromFavorites: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	// favorite: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	profile: state.profile,
	// favorite: state.favorite,
	auth: state.auth,
});

export default connect(mapStateToProps, {
	loadUser,
	getProfileById,
	getFavorites,
	addToFavorites,
	removeFromFavorites,
})(Details);
