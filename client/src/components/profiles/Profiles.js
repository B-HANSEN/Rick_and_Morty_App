import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
	console.log('profiles payload into component', profiles);
	useEffect(() => {
		getProfiles();
	}, [getProfiles]);

	return (
		<>
			<h1>Characters page</h1>
			{loading ? (
				<Spinner />
			) : (
				<>
					<h1 className='large text-primary'>Character's view</h1>
					<p className='lead'>
						<i className='fab fa-connectdevelop' /> Browse the characters or
						choose your favourites
					</p>
					<div className='profiles'>
						<div className='profiles'>
							{profiles.length > 0 ? (
								profiles.map(profile => (
									<ProfileItem key={profile.id} profile={profile} />
								))
							) : (
								<h4>No profiles found...</h4>
							)}
						</div>
					</div>
				</>
			)}
		</>
	);
};

Profiles.propTypes = {
	getProfiles: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
