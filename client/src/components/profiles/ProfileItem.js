import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
	profile: { name, status, species, location, origin, image },
}) => {
	return (
		<div className='profile bg-light'>
			<div>
				<img src={image} alt='' />
				<h2>{name}</h2>

				<p className='my-1'>
					{status} - {species}
				</p>
				<p className='my-1'>{location.name}</p>
				<p className='my-1'>{origin.name}</p>
				{/* <Link to={`/profile/${_id}`} className='btn btn-primary'>
					{' '}
					View Character
				</Link> */}
			</div>
		</div>
	);
};

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileItem;
