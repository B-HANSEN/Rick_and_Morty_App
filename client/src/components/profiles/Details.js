import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import { useLocation } from 'react-router-dom';

const Details = ({ getProfileById, profile: { profile, loading }, match }) => {
	const location = useLocation();
	useEffect(() => {
		getProfileById(match.params.id);
	}, [getProfileById, match.params.id, location.key]);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<div className='details-page'>
					<div className=''>
						<div>
							<h1 className='large text-primary'>Character's detail view</h1>
							<p className='lead'>
								<i className='fab fa-connectdevelop' /> Here you can find more
								details about {profile.name}
							</p>
						</div>
						<div></div>
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
							<div className='my-1'>{profile.name}</div>
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
							{/* <div className='my-1'>{profile.species}</div> */}
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
				</div>
			)}
		</>
	);
};

Details.propTypes = {
	getProfileById: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	profile: state.profile,
});

export default connect(mapStateToProps, { getProfileById })(Details);
