import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfiles } from '../../actions/profile';
import { loadUser } from '../../actions/auth';
// import { v4 as uuidv4 } from 'uuid';

const ProfileItem = ({
	profile: { profile, id, name, status, species, location, origin, image },
	auth,
}) => {
	// const linkTarget = {
	// 	pathname: `/profile/${id}`,
	// 	key: uuidv4(), // we could use Math.random, but that's not guaranteed unique.
	// 	state: {
	// 		applied: true,
	// 	},
	// };
	// useEffect(() => {
	// 	getProfiles();
	// 	loadUser();
	// }, [getProfiles, loadUser]);
	return (
		<div className='profile bg-dark'>
			<div>
				<img src={image} alt='characterImage' width='100%' height='100%' />
			</div>
			<div className='right'>
				<div className='favourite'>
					<h2>{name}</h2>
					<p className='favourite-star'>
						{auth?.user?.favorites.includes(profile?.id) ? (
							<i className='fas fa-star' />
						) : (
							<i className='far fa-star' />
						)}
					</p>
				</div>

				<p className='my-1'>
					{status === 'unknown' && <i className='far fa-circle' />}
					{status === 'Alive' && <i className='fas fa-circle text-success' />}
					{status === 'Dead' && (
						<i className='fas fa-circle text-danger' />
					)}{' '}
					{status} - {species}
				</p>
				<p className='my-1'>
					<span className='item'>Last known location:</span>
					<br />
					{location.name}
				</p>
				<p className='my-1'>
					<span className='item'>First seen in:</span>
					<br />
					{origin.name}
				</p>
				{/* <p>Please click on refresh!!</p> */}
				<div className='character-link'>
					<Link
						to={`/profiles/${id}`}
						// to={linkTarget}
						key={location.key}
						className='btn btn-primary'
					>
						View Character
					</Link>
				</div>
			</div>
		</div>
	);
};

ProfileItem.propTypes = {
	// loadUser: PropTypes.func.isRequired,
	// getProfiles: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
};

// const mapStateToProps = state => ({
// 	profile: state.profile,
// 	auth: state.auth,
// });

// export default connect(mapStateToProps, { loadUser, getProfiles })(ProfileItem);
export default ProfileItem;
