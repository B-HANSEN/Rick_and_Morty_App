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
			<h1>Characters page</h1>
			{loading ? (
				<Spinner />
			) : (
				<>
					<h1 className='large text-primary'>Character's view</h1>
					<p className='lead'>
						<i className='fab fa-connectdevelop' /> Here you find more details
						about{profile.name}
					</p>
					<div>
						<Link to='/profiles' className='btn btn-light'>
							Back to all characters
						</Link>
						<div>
							<img src={profile.image} alt='profileImage' />
						</div>
						<div>
							<div className='profiles'>{profile.name}</div>
							<div className='profiles'>{profile.status}</div>
							<div className='profiles'>{profile.gender}</div>
							<div className='profiles'>{profile.species}</div>
							<div className='profiles'>{profile.origin.name}</div>
							<div className='profiles'>{profile.location.name}</div>
						</div>
					</div>
				</>
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
