import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import { addToFavorites } from '../../actions/favorite';
// import { useLocation } from 'react-router-dom';

const Details = ({
	getProfileById,
	addToFavorites,
	profile: { profile, loading },
	auth,
	match,
}) => {
	// const location = useLocation();
	useEffect(() => {
		getProfileById(match.params.id);
	}, [
		getProfileById,
		match.params.id,
		//  location.key
	]);

	const handleClick = async auth => {
		debugger;
		await addToFavorites(profile.id, auth.user._id);
	};

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
					</div>

					<div className='details bg-dark'>
						<div className='details-photo'>
							<img
								src={profile.image}
								alt='profileImage'
								width='100%'
								height='100%'
							/>
						</div>
						<div className='details-right'>
							<div className='favourite'>
								<h2 className='my-1'>{profile.name}</h2>
								<p className='favourite-star my-1'>
									<i className='far fa-star' />
								</p>
							</div>

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
							<div className='my-1'>{profile.gender}</div>
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
						</div>
					</div>
					<Link to='/profiles' className='btn btn-light'>
						Return to characters overview
					</Link>
					<button onClick={e => handleClick(auth)}>Add to favorites</button>
				</div>
			)}
		</>
	);
};

Details.propTypes = {
	getProfileById: PropTypes.func.isRequired,
	addToFavorites: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	// favorite: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	profile: state.profile,
	favorite: state.favorite,
	auth: state.auth,
});

export default connect(mapStateToProps, { addToFavorites, getProfileById })(
	Details
);
