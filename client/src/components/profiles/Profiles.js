import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';
import { loadUser } from '../../actions/auth';

const Profiles = ({ getProfiles, profile: { profiles, loading }, auth }) => {
	useEffect(() => {
		getProfiles();
		loadUser();
	}, [getProfiles, loadUser]);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				<>
					<h1 className='large text-primary'>Characters overview</h1>
					<p className='lead'>
						<i className='fab fa-connectdevelop' /> Browse the characters and
						check more information by viewing them individually
					</p>
					<div className='profiles'>
						{profiles.map(profile => (
							<ProfileItem key={profile.id} profile={profile} auth={auth} />
						))}
					</div>
				</>
			)}
		</>
	);
};

Profiles.propTypes = {
	loadUser: PropTypes.func.isRequired,
	getProfiles: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	profile: state.profile,
	auth: state.auth,
});

export default connect(mapStateToProps, { loadUser, getProfiles })(Profiles);
